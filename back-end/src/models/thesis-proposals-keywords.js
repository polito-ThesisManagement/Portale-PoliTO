module.exports = (sequelize, DataTypes) => {
  const ThesisProposalKeyword = sequelize.define(
    'thesis-proposals-keywords',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'thesis_proposals',
          key: 'id',
        },
      },
      keyword_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'keywords',
          key: 'id',
        },
      },
    },
    {
      tableName: 'thesis_proposals_keywords',
      timestamps: false,
    },
  );
  return ThesisProposalKeyword;
};
