module.exports = (sequelize, DataTypes) => {
  const DegreeProgramme = sequelize.define(
    'degree-programme',
    {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_en: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: 'degree_programme',
      timestamps: false,
    },
  );
  return DegreeProgramme;
};
