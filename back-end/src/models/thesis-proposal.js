module.exports = (sequelize, DataTypes) => {
  const ThesisProposal = sequelize.define(
    'thesis_proposal',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topic_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      link: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      required_skills: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      required_skills_en: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      additional_notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      additional_notes_en: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      external_cosupervisors: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      creation_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      expiration_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      is_internal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_abroad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      attachment_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'thesis_proposal',
      timestamps: false,
    },
  );
  return ThesisProposal;
};
