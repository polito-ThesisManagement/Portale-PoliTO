module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define(
    'keywords',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      keyword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'keywords',
      timestamps: false,
    },
  );
  return Keyword;
};
