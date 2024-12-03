const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const ThesisProposal = require('./thesis-proposal')(sequelize, Sequelize.DataTypes);
const Degree = require('./degree')(sequelize, Sequelize.DataTypes);
const ThesisProposalDegree = require('./thesis-proposal-degree')(sequelize, Sequelize.DataTypes);
const Keyword = require('./keyword')(sequelize, Sequelize.DataTypes);
const ThesisProposalKeyword = require('./thesis-proposal-keyword')(sequelize, Sequelize.DataTypes);
const Type = require('./type')(sequelize, Sequelize.DataTypes);
const ThesisProposalType = require('./thesis-proposal-type')(sequelize, Sequelize.DataTypes);
const Teacher = require('./teacher')(sequelize, Sequelize.DataTypes);
const ThesisProposalSupervisorCoSupervisor = require('./thesis-proposal-supervisor-cosupervisor')(
  sequelize,
  Sequelize.DataTypes,
);
const LoggedStudent = require('./logged-student')(sequelize, Sequelize.DataTypes);
const Student = require('./student')(sequelize, Sequelize.DataTypes);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.ThesisProposal = ThesisProposal;
db.Degree = Degree;
db.ThesisProposalDegree = ThesisProposalDegree;
db.Keyword = Keyword;
db.ThesisProposalKeyword = ThesisProposalKeyword;
db.Type = Type;
db.ThesisProposalType = ThesisProposalType;
db.Teacher = Teacher;
db.ThesisProposalSupervisorCoSupervisor = ThesisProposalSupervisorCoSupervisor;
db.Student = Student;

// Define relationships
ThesisProposal.belongsToMany(Degree, {
  through: ThesisProposalDegree,
  foreignKey: 'thesis_proposal_id',
  otherKey: 'degree_id',
});
Degree.belongsToMany(ThesisProposal, {
  through: ThesisProposalDegree,
  foreignKey: 'degree_id',
  otherKey: 'thesis_proposal_id',
});

ThesisProposal.belongsToMany(Keyword, {
  through: ThesisProposalKeyword,
  foreignKey: 'thesis_proposal_id',
  otherKey: 'keyword_id',
});
Keyword.belongsToMany(ThesisProposal, {
  through: ThesisProposalKeyword,
  foreignKey: 'keyword_id',
  otherKey: 'thesis_proposal_id',
});

ThesisProposal.belongsToMany(Type, {
  through: ThesisProposalType,
  foreignKey: 'thesis_proposal_id',
  otherKey: 'type_id',
});
Type.belongsToMany(ThesisProposal, {
  through: ThesisProposalType,
  foreignKey: 'type_id',
  otherKey: 'thesis_proposal_id',
});

ThesisProposal.belongsToMany(Teacher, {
  through: ThesisProposalSupervisorCoSupervisor,
  foreignKey: 'thesis_proposal_id',
  otherKey: 'teacher_id',
});
Teacher.belongsToMany(ThesisProposal, {
  through: ThesisProposalSupervisorCoSupervisor,
  foreignKey: 'teacher_id',
  otherKey: 'thesis_proposal_id',
});

Student.hasOne(Degree, {
  foreignKey: 'degree_id',
});
Degree.hasMany(Student, {
  foreignKey: 'degree_id',
});

Student.hasOne(LoggedStudent, {
  foreignKey: 'student_id',
});
LoggedStudent.hasOne(Student, {
  foreignKey: 'student_id',
});

module.exports = db;
