module.exports = (sequelize, DataTypes) => {
  const ThesisProposalType = sequelize.define(
    'thesis-proposal-type',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'thesis_proposal',
          key: 'id',
        },
      },
      type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
