module.exports = (sequelize, DataTypes) => {
  const Collegio = sequelize.define(
    'collegio',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'collegio',
      timestamps: false,
    },
  );
  return Collegio;
};
