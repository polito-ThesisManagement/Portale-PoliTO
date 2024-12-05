const { Op } = require('sequelize');
const { ThesisProposalKeyword, ThesisProposalSupervisorCoSupervisor, ThesisProposalType } = require('../models');

const buildWhereConditions = async (query, lang) => {
  const { search_string, isInternal, isAbroad, supervisor, keyword, thesis_type } = query;

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

  let thesisProposalIds = null;

  if (supervisor) {
    const filteredProposalIds = await filterBySupervisor(supervisor);
    thesisProposalIds =
      thesisProposalIds === null
        ? filteredProposalIds
        : thesisProposalIds.filter(id => filteredProposalIds.includes(id));
  }

  if (keyword) {
    const filteredProposalIds = await filterByKeyword(keyword);
    thesisProposalIds =
      thesisProposalIds === null
        ? filteredProposalIds
        : thesisProposalIds.filter(id => filteredProposalIds.includes(id));
  }

  if (thesis_type) {
    const filteredProposalIds = await filterByThesisType(thesis_type);
    thesisProposalIds =
      thesisProposalIds === null
        ? filteredProposalIds
        : thesisProposalIds.filter(id => filteredProposalIds.includes(id));
  }

  if (thesisProposalIds !== null) {
    where.id = { [Op.in]: thesisProposalIds };
  }

  where.expiration_date = { [Op.gt]: new Date() };

  return where;
};

const filterBySupervisor = async supervisor => {
  const thesisIds = await ThesisProposalSupervisorCoSupervisor.findAll({
    attributes: ['thesis_proposal_id'],
    where: {
      teacher_id: supervisor,
    },
  });

  return thesisIds.map(thesis => thesis.thesis_proposal_id);
};

const filterByKeyword = async keyword => {
  const keywordIds = await ThesisProposalKeyword.findAll({
    attributes: ['thesis_proposal_id'],
    where: {
      keyword_id: keyword,
    },
  });

  return keywordIds.map(keyword => keyword.thesis_proposal_id);
};

const filterByThesisType = async thesis_type => {
  const thesisTypeIds = await ThesisProposalType.findAll({
    attributes: ['thesis_proposal_id'],
    where: {
      type_id: thesis_type,
    },
  });

  return thesisTypeIds.map(type => type.thesis_proposal_id);
};

module.exports = {
  buildWhereConditions,
  filterBySupervisor,
  filterByKeyword,
  filterByThesisType,
};
