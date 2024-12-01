const thesisProposalSchema = require('../schemas/ThesisProposal');
const thesisProposalOverviewSchema = require('../schemas/ThesisProposalOverview');

const formatThesisProposals = (thesisProposals, detailed = false) => {
  return thesisProposals.map(proposal => {
    const parsedProposal = detailed
      ? thesisProposalSchema.parse(proposal.toJSON())
      : thesisProposalOverviewSchema.parse(proposal.toJSON());
    return parsedProposal;
  });
};

module.exports = formatThesisProposals;
