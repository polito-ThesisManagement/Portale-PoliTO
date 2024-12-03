module.exports = (sequelize, DataTypes) => {
  const ThesisProposalType = sequelize.define(
    'thesis-proposals-types',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'thesis_proposals',
          key: 'id',
        },
      },
      type_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'types',
          key: 'id',
        },
      },
    },
    {
      tableName: 'thesis_proposals_types',
      timestamps: false,
    },
  );
  return ThesisProposalType;
};
