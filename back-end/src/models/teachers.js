module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    'teachers',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      facility_short_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'teachers',
      timestamps: false,
    },
  );
  return Teacher;
};
