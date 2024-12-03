module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'student',
    {
      id: {
        type: DataTypes.STRING,
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
      profile_picture_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      degree_id: {
        type: DataTypes.STRING,
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
