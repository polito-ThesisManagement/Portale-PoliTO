const { Keyword, Teacher, ThesisProposal, Type } = require('../models');
const formatThesisProposals = require('../utils/formatThesisProposals');
const selectKeywordAttributes = require('../utils/selectKeywordAttributes');
const selectTeacherAttributes = require('../utils/selectTeacherAttributes');
const selectThesisProposalAttributes = require('../utils/selectThesisProposalAttributes');
const selectTypeAttributes = require('../utils/selectTypeAttributes');

const getThesisProposals = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';

    const thesisProposals = await ThesisProposal.findAll({
      attributes: selectThesisProposalAttributes(lang),
      include: [
        {
          model: Keyword,
          through: { attributes: [] },
          attributes: selectKeywordAttributes(),
        },
        {
          model: Type,
          through: { attributes: [] },
          attributes: selectTypeAttributes(),
        },
        {
          model: Teacher,
          through: {
            attributes: ['is_supervisor'],
          },
          attributes: selectTeacherAttributes(),
        },
      ],
    });

    const formattedThesisProposals = formatThesisProposals(thesisProposals);
    res.json(formattedThesisProposals);
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
