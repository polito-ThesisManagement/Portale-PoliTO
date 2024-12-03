module.exports = (sequelize, DataTypes) => {
  const ThesisProposalType = sequelize.define(
    'thesi-proposal-type',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'thesis_proposal',
          key: 'id',
        },
      },
      type_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'type',
          key: 'id',
        },
      },
    },
    {
      tableName: 'thesis_proposal_type',
      timestamps: false,
    },
  );
  return ThesisProposalType;
};
