const { Op } = require('sequelize');
const { ThesisProposalKeyword, ThesisProposalSupervisorCoSupervisor, ThesisProposalType } = require('../models');

const buildWhereConditions = async (query, lang) => {
  const { search, isInternal, isAbroad, teacherId, keywordId, typeId } = query;

  const topicField = lang === 'it' ? 'topic' : 'topic_en';
  const descriptionField = lang === 'it' ? 'description' : 'description_en';
  const where = {};

  if (search) {
    where[Op.or] = [
      { [topicField]: { [Op.like]: `%${search}%` } },
      { [descriptionField]: { [Op.like]: `%${search}%` } },
    ];
  }

  if (isInternal !== undefined) {
    where.is_internal = isInternal === 'true';
  }

  if (isAbroad !== undefined) {
    where.is_abroad = isAbroad === 'true';
  }

  let thesisProposalIds = null;

  if (teacherId) {
    const filteredProposalIds = await filterByThesisSupervisor(teacherId);
    thesisProposalIds = filteredProposalIds;
  }

  if (keywordId) {
    const filteredProposalIds = await filterByThesisKeyword(keywordId);
    thesisProposalIds = Array.isArray(thesisProposalIds)
      ? thesisProposalIds.filter(id => filteredProposalIds.includes(id))
      : filteredProposalIds;
  }

  if (typeId) {
    const filteredProposalIds = await filterByThesisType(typeId);
    thesisProposalIds = Array.isArray(thesisProposalIds)
      ? thesisProposalIds.filter(id => filteredProposalIds.includes(id))
      : filteredProposalIds;
  }

  if (thesisProposalIds !== null) {
    where.id = { [Op.in]: thesisProposalIds };
  }

  where.expiration_date = { [Op.gt]: new Date() };

  return where;
};

const filterByThesisSupervisor = async supervisor => {
  const thesisIds = await ThesisProposalSupervisorCoSupervisor.findAll({
    attributes: ['thesis_proposal_id'],
    where: {
      teacher_id: supervisor,
    },
  });

  return thesisIds.map(thesis => thesis.thesis_proposal_id);
};

const filterByThesisKeyword = async keyword => {
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
  filterByThesisSupervisor,
  filterByThesisKeyword,
  filterByThesisType,
};
