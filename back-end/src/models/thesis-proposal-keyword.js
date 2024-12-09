module.exports = (sequelize, DataTypes) => {
  const ThesisProposalKeyword = sequelize.define(
    'thesis-proposal-keyword',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'thesis_proposal',
          key: 'id',
        },
      },
      keyword_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'keyword',
          key: 'id',
        },
      },
    },
    {
      tableName: 'thesis_proposal_keyword',
      timestamps: false,
    },
  );
  return ThesisProposalKeyword;
};
