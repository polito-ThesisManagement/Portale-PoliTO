const { Op } = require('sequelize');
const { Keyword, Teacher, ThesisProposal, Type } = require('../models');
const { filterBySupervisor, filterByKeyword, filterByThesisType } = require('../utils/filters');
const formatThesisProposals = require('../utils/formatThesisProposals');
const selectKeywordAttributes = require('../utils/selectKeywordAttributes');
const selectTeacherAttributes = require('../utils/selectTeacherAttributes');
const selectThesisProposalAttributes = require('../utils/selectThesisProposalAttributes');
const selectTypeAttributes = require('../utils/selectTypeAttributes');

const getThesisProposals = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;
    const {
      isInternal,
      isAbroad,
      keyword,
      orderBy = 'DESC',
      supervisor,
      search_string,
      sortBy = 'creation_date',
      thesis_type,
    } = req.query;

    const topicField = lang === 'it' ? 'topic' : 'topic_en';
    const descriptionField = lang === 'it' ? 'description' : 'description_en';

    const where = {};

    if (search_string) {
      where[Op.or] = [
        { [topicField]: { [Op.like]: `%${search_string}%` } },
        { [descriptionField]: { [Op.like]: `%${search_string}%` } },
      ];
    }

    if (isInternal !== undefined) {
      where.is_internal = isInternal === 'true';
    }

    if (isAbroad !== undefined) {
      where.is_abroad = isAbroad === 'true';
    }

    let thesisProposalIds = [];

    if (supervisor) {
      const filteredProposalIds = await filterBySupervisor(supervisor);
      thesisProposalIds = thesisProposalIds.length
        ? thesisProposalIds.filter(id => filteredProposalIds.includes(id))
        : filteredProposalIds;
    }

    if (keyword) {
      const filteredProposalIds = await filterByKeyword(keyword);
      thesisProposalIds = thesisProposalIds.length
        ? thesisProposalIds.filter(id => filteredProposalIds.includes(id))
        : filteredProposalIds;
    }

    if (thesis_type) {
      const filteredProposalIds = await filterByThesisType(thesis_type);
      thesisProposalIds = thesisProposalIds.length
        ? thesisProposalIds.filter(id => filteredProposalIds.includes(id))
        : filteredProposalIds;
    }

    if (thesisProposalIds.length) {
      where.id = {
        [Op.in]: thesisProposalIds,
      };
    }

    if (thesisProposalIds.length === 0 && (supervisor || keyword || thesis_type)) {
      return res.json({
        count: 0,
        thesisProposals: [],
        currentPage: page,
        totalPages: 0,
      });
    }

    const include = [
      {
        model: Keyword,
        through: { attributes: [] },
        attributes: selectKeywordAttributes(lang),
      },
      {
        model: Type,
        through: { attributes: [] },
        attributes: selectTypeAttributes(lang),
      },
      {
        model: Teacher,
        through: {
          attributes: ['is_supervisor'],
        },
        attributes: selectTeacherAttributes(),
      },
    ];

    const { count, rows } = await ThesisProposal.findAndCountAll({
      attributes: selectThesisProposalAttributes(lang),
      include: include.filter(Boolean),
      where,
      order: [[sortBy, orderBy]],
      limit,
      offset,
      distinct: true,
    });
    const formattedThesisProposals = formatThesisProposals(rows);
    res.json({
      count: count,
      thesisProposals: formattedThesisProposals,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getThesisProposalById = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';

    const thesisProposal = await ThesisProposal.findByPk(req.params.thesisProposalId, {
      attributes: selectThesisProposalAttributes(lang, true),
      include: [
        {
          model: Keyword,
          through: { attributes: [] },
          attributes: selectKeywordAttributes(lang),
        },
        {
          model: Type,
          through: { attributes: [] },
          attributes: selectTypeAttributes(lang),
        },
        {
          model: Teacher,
          through: {
            attributes: ['is_supervisor'],
          },
          attributes: selectTeacherAttributes(true),
        },
      ],
    });

    if (!thesisProposal) {
      return res.status(404).json({ error: 'Thesis proposal not found' });
    }

    const formattedThesisProposal = formatThesisProposals([thesisProposal], true)[0];
    res.json(formattedThesisProposal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getThesisProposals,
  getThesisProposalById,
};
