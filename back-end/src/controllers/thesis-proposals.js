const { Op } = require('sequelize');
const { getStudentData } = require('./student');
const { ThesisProposal, sequelize } = require('../models');
const { buildWhereConditions } = require('../utils/filters');
const formatThesisProposals = require('../utils/formatThesisProposals');
const selectThesisProposalAttributes = require('../utils/selectThesisProposalAttributes');
const { getIncludes } = require('../utils/includes');
const getPaginationParams = require('../utils/paginationParams');

const camelToSnakeCase = str => str.replace(/([A-Z])/g, '_$1').toLowerCase();

const fetchThesisProposals = async (where, includes, lang, pagination) => {
  const { limit, offset, orderBy, sortBy } = pagination;

  if (orderBy && orderBy !== 'ASC' && orderBy !== 'DESC') {
    throw new Error('Invalid orderBy parameter');
  }

  if (
    sortBy &&
    sortBy !== 'creationDate' &&
    sortBy !== 'expirationDate' &&
    sortBy !== 'topic' &&
    sortBy !== 'description' &&
    sortBy !== 'id'
  ) {
    throw new Error('Invalid sortBy parameter');
  }

  const sortBySnakeCase = camelToSnakeCase(sortBy);

  const { count, rows } = await ThesisProposal.findAndCountAll({
    attributes: selectThesisProposalAttributes(lang),
    include: includes,
    where,
    order: [[sortBySnakeCase, orderBy]],
    limit,
    offset,
    distinct: true,
  });

  return {
    count,
    formattedProposals: formatThesisProposals(rows),
    totalPages: Math.ceil(count / limit),
  };
};

const getThesisProposals = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';
    const pagination = getPaginationParams(req.query);
    const where = await buildWhereConditions(req.query, lang);
    const includes = getIncludes(lang).filter(Boolean);

    const { count, formattedProposals, totalPages } = await fetchThesisProposals(where, includes, lang, pagination);

    res.json({
      count,
      thesisProposals: formattedProposals,
      currentPage: pagination.page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTargetedThesisProposals = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';
    const pagination = getPaginationParams(req.query);
    const { collegioId, level, studentThesisProposalIdArray } = await getStudentData();
    const includes = getIncludes(lang).filter(Boolean);

    const where = await buildWhereConditions(req.query, lang);
    where[Op.or] = [
      {
        id_collegio: collegioId,
        level,
        id: { [Op.notIn]: sequelize.literal(`(SELECT thesis_proposal_id FROM thesis_proposal_degree)`) },
      },
      { id: { [Op.in]: studentThesisProposalIdArray } },
    ];

    const { count, formattedProposals, totalPages } = await fetchThesisProposals(where, includes, lang, pagination);

    res.json({
      count,
      thesisProposals: formattedProposals,
      currentPage: pagination.page,
      totalPages,
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
      include: getIncludes(lang, true),
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
