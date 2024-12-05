const { ThesisProposalKeyword, ThesisProposalSupervisorCoSupervisor, ThesisProposalType } = require('../models');

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
  filterBySupervisor,
  filterByKeyword,
  filterByThesisType,
};
