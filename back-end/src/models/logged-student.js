module.exports = (sequelize, DataTypes) => {
  const LoggedStudent = sequelize.define(
    'logged_student',
    {
      student_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'student',
          key: 'id',
        },
      },
    },
    {
      tableName: 'logged_student',
      timestamps: false,
    },
  );
  return LoggedStudent;
};
