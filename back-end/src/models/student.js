module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'student',
    {
      id: {
        type: DataTypes.STRING(6),
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
      profile_picture_url: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      degree_id: {
        type: DataTypes.STRING(10),
        references: {
          model: 'degree',
          key: 'id',
        },
      },
    },
    {
      tableName: 'student',
      timestamps: false,
    },
  );
  return Student;
};
