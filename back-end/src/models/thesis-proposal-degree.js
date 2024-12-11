module.exports = (sequelize, DataTypes) => {
  const ThesisProposalDegree = sequelize.define(
    'thesis_proposal_degree',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'thesis_proposal',
          key: 'id',
        },
      },
      degree_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        references: {
          model: 'degree',
          key: 'id',
        },
      },
    },
    {
      tableName: 'thesis_proposal_degree',
      timestamps: false,
    },
  );
  return ThesisProposalDegree;
};
