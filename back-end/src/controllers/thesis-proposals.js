const { Op } = require('sequelize');
const { Keyword, sequelize, Teacher, ThesisProposal, Type } = require('../models');
const { getStudentData } = require('./students');
const { buildWhereConditions } = require('../utils/filters');
const { getIncludes } = require('../utils/includes');
const formatThesisProposals = require('../utils/formatThesisProposals');
const selectThesisProposalAttributes = require('../utils/selectThesisProposalAttributes');
const getPaginationParams = require('../utils/paginationParams');
const selectTypeAttributes = require('../utils/selectTypeAttributes');
const selectKeywordAttributes = require('../utils/selectKeywordAttributes');
const selectTeacherAttributes = require('../utils/selectTeacherAttributes');
const teacherOverviewSchema = require('../schemas/TeacherOverview');

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

    const baseWhere = await buildWhereConditions(req.query, lang);

    const additionalWhere = {
      [Op.or]: [
        {
          id_collegio: collegioId,
          level,
          id: { [Op.notIn]: sequelize.literal(`(SELECT thesis_proposal_id FROM thesis_proposal_degree)`) },
        },
        { id: { [Op.in]: studentThesisProposalIdArray } },
      ],
    };

    const where = {
      [Op.and]: [baseWhere, additionalWhere],
    };

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

const getThesisProposalsTypes = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';
    const { search = '' } = req.query;

    const where = search
      ? {
          type: {
            [Op.like]: `%${search}%`,
          },
        }
      : {};

    const types = await Type.findAll({
      attributes: selectTypeAttributes(lang),
      where,
      order: [['type', 'ASC']],
    });

    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getThesisProposalsKeywords = async (req, res) => {
  try {
    const lang = req.query.lang || 'it';
    const { search = '' } = req.query;

    const where = search
      ? {
          keyword: {
            [Op.like]: `%${search}%`,
          },
        }
      : {};

    const keywords = await Keyword.findAll({
      attributes: selectKeywordAttributes(lang),
      where,
      order: [['keyword', 'ASC']],
    });

    res.json(keywords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getThesisProposalsTeachers = async (req, res) => {
  try {
    const { search = '' } = req.query;

    const where = search
      ? {
          [Op.or]: [
            { first_name: { [Op.like]: `%${search}%` } },
            { last_name: { [Op.like]: `%${search}%` } },
            sequelize.where(sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), {
              [Op.like]: `%${search}%`,
            }),
            sequelize.where(sequelize.fn('concat', sequelize.col('last_name'), ' ', sequelize.col('first_name')), {
              [Op.like]: `%${search}%`,
            }),
          ],
        }
      : {};

    const teachers = await Teacher.findAll({
      attributes: selectTeacherAttributes(),
      where,
      order: [[sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'ASC']],
    });

    res.json(teachers.map(teacher => teacherOverviewSchema.parse(teacher)));
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
  getThesisProposalsTypes,
  getThesisProposalsKeywords,
  getThesisProposalsTeachers,
  getThesisProposalById,
};
