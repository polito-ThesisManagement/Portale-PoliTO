module.exports = (sequelize, DataTypes) => {
  const ThesisProposalSupervisorCoSupervisor = sequelize.define(
    'thesis-proposals-supervisors-cosupervisors',
    {
      thesis_proposal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'thesis_proposals',
          key: 'id',
        },
      },
      teacher_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'keywords',
          key: 'id',
        },
      },
      is_supervisor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: 'thesis_proposals_supervisors_cosupervisors',
      timestamps: false,
    },
  );
  return ThesisProposalSupervisorCoSupervisor;
};
