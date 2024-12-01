module.exports = (sequelize, Sequelize) => {
  const ThesisProposal = sequelize.define(
    'thesis_proposals',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      topic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      required_skills: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      additional_notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      external_cosupervisors: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      creation_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expiration_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      is_internal: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_abroad: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: 'thesis_proposals',
      timestamps: false,
    },
  );
  return ThesisProposal;
};
