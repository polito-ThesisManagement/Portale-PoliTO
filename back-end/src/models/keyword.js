module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define(
    'keyword',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      keyword: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      keyword_en: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'keyword',
      timestamps: false,
    },
  );
  return Keyword;
};
