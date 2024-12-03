module.exports = (sequelize, DataTypes) => {
  const ThesisProposalDegree = sequelize.define(
    'thesis_proposal_degree',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      degree_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      tableName: 'thesis_proposal_degree',
      timestamps: false,
    },
  );
  return ThesisProposalDegree;
};
