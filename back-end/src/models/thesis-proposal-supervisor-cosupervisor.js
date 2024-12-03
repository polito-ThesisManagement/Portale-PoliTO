module.exports = (sequelize, DataTypes) => {
  const ThesisProposalSupervisorCoSupervisor = sequelize.define(
    'thesis-proposal-supervisor-cosupervisor',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'thesis_proposal',
          key: 'id',
        },
      },
      teacher_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'keyword',
          key: 'id',
        },
      },
      is_supervisor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: 'thesis_proposal_supervisor_cosupervisor',
      timestamps: false,
    },
  );
  return ThesisProposalSupervisorCoSupervisor;
};
