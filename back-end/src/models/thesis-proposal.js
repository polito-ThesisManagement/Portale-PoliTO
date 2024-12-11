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
        type: DataTypes.STRING(500),
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
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      level: {
        type: DataTypes.ENUM('1', '2'),
        allowNull: false,
      },
      id_collegio: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
          model: 'collegio',
          key: 'id',
        },
      },
    },
    {
      tableName: 'thesis_proposal',
      timestamps: false,
    },
  );
  return ThesisProposal;
};
