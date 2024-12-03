module.exports = (sequelize, DataTypes) => {
  const Degree = sequelize.define(
    'degree',
    {
      id: {
        type: DataTypes.STRING,
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
    },
    {
      tableName: 'degree',
      timestamps: false,
    },
  );
  return Degree;
};
