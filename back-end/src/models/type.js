module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    'type',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'type',
      timestamps: false,
    },
  );
  return Type;
};
