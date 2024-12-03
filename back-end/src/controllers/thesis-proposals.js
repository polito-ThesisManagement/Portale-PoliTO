const { Op } = require('sequelize');
const { Keyword, Teacher, ThesisProposal, Type } = require('../models');
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

    const { count, rows } = await ThesisProposal.findAndCountAll({
      attributes: selectThesisProposalAttributes(lang),
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
          attributes: selectTeacherAttributes(),
        },
      ],
      where: {
        expiration_date: {
          [Op.gt]: new Date(),
        },
      },
      order: [['creation_date', 'DESC']],
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
