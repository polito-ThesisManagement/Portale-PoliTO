const { Op } = require('sequelize');
const { getStudentData } = require('../routers/student');
const { Keyword, Teacher, ThesisProposal, Type, sequelize } = require('../models');
const { buildWhereConditions } = require('../utils/filters');
const formatThesisProposals = require('../utils/formatThesisProposals');
const selectKeywordAttributes = require('../utils/selectKeywordAttributes');
const selectTeacherAttributes = require('../utils/selectTeacherAttributes');
const selectThesisProposalAttributes = require('../utils/selectThesisProposalAttributes');
const selectTypeAttributes = require('../utils/selectTypeAttributes');
const { getIncludes } = require('../utils/includes');

const getThesisProposals = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;
    const { orderBy = 'DESC', sortBy = 'creation_date' } = req.query;

    const where = await buildWhereConditions(req.query, lang);

    const { count, rows } = await ThesisProposal.findAndCountAll({
      attributes: selectThesisProposalAttributes(lang),
      include: getIncludes(lang).filter(Boolean),
      where,
      order: [[sortBy, orderBy]],
      limit,
      offset,
      distinct: true,
    });
    const formattedThesisProposals = formatThesisProposals(rows);
    res.json({
      count,
      thesisProposals: formattedThesisProposals,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTargetedThesisProposals = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;
    const { orderBy = 'DESC', sortBy = 'creation_date' } = req.query;

    const where = await buildWhereConditions(req.query, lang);
    const { collegioId, level, studentThesisProposalIdArray } = await getStudentData();

    where[Op.or] = [
      {
        id_collegio: collegioId,
        level,
        id: { [Op.notIn]: sequelize.literal(`(SELECT thesis_proposal_id FROM thesis_proposal_degree)`) },
      },
      { id: { [Op.in]: studentThesisProposalIdArray } },
    ];

    const { count, rows } = await ThesisProposal.findAndCountAll({
      attributes: selectThesisProposalAttributes(lang),
      include: getIncludes(lang).filter(Boolean),
      where,
      order: [[sortBy, orderBy]],
      limit,
      offset,
      distinct: true,
    });
    const formattedThesisProposals = formatThesisProposals(rows);
    res.json({
      count,
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
  getTargetedThesisProposals,
  getThesisProposalById,
};
