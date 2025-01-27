module.exports = (sequelize, DataTypes) => {
  const DegreeContainer = sequelize.define(
    'degree-programme-container',
    {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'degree_programme_container',
      timestamps: false,
    },
  );
  return DegreeContainer;
};
