module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    'types',
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
    },
    {
      tableName: 'types',
      timestamps: false,
    },
  );
  return Type;
};
