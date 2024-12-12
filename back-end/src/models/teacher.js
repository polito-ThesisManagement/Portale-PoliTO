module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    'teacher',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      profile_url: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      profile_picture_url: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      facility_short_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'teacher',
      timestamps: false,
    },
  );
  return Teacher;
};
