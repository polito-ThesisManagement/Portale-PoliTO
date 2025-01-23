const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Collegio = require('./collegio')(sequelize, Sequelize.DataTypes);
const ThesisProposal = require('./thesis-proposal')(sequelize, Sequelize.DataTypes);
const DegreeProgramme = require('./degree-programme')(sequelize, Sequelize.DataTypes);
const DegreeProgrammeContainer = require('./degree-programme-container')(sequelize, Sequelize.DataTypes);
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
db.Collegio = Collegio;
db.ThesisProposal = ThesisProposal;
db.DegreeProgramme = DegreeProgramme;
db.DegreeProgrammeContainer = DegreeProgrammeContainer;
db.ThesisProposalDegree = ThesisProposalDegree;
db.Keyword = Keyword;
db.ThesisProposalKeyword = ThesisProposalKeyword;
db.Type = Type;
db.ThesisProposalType = ThesisProposalType;
db.Teacher = Teacher;
db.ThesisProposalSupervisorCoSupervisor = ThesisProposalSupervisorCoSupervisor;
db.Student = Student;

// Define relationships

// DegreeProgramme and Collegio (one-to-many)
DegreeProgramme.belongsTo(Collegio, {
  foreignKey: 'id_collegio',
});

Collegio.hasMany(DegreeProgramme, {
  foreignKey: 'id_collegio',
});

// DegreeProgramme and DegreeProgrammeContainerMapping (one-to-many)
DegreeProgramme.belongsTo(DegreeProgrammeContainer, {
  foreignKey: 'degree_id',
  otherKey: 'container_id',
});

DegreeProgrammeContainer.hasMany(DegreeProgramme, {
  foreignKey: 'degree_id',
  otherKey: 'container_id',
});

// ThesisProposal and DegreeProgramme (many-to-many)
ThesisProposal.belongsToMany(DegreeProgramme, {
  through: ThesisProposalDegree,
  foreignKey: 'thesis_proposal_id',
  otherKey: 'degree_id',
});

DegreeProgramme.belongsToMany(ThesisProposal, {
  through: ThesisProposalDegree,
  foreignKey: 'degree_id',
  otherKey: 'thesis_proposal_id',
});

// ThesisProposal and Keyword (many-to-many)
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

// ThesisProposal and Type (many-to-many)
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

// ThesisProposal and Teacher (many-to-many)
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

// Student and DegreeProgramme (one-to-many)
Student.belongsTo(DegreeProgramme, {
  foreignKey: 'degree_id',
});

DegreeProgramme.hasMany(Student, {
  foreignKey: 'degree_id',
});

// Student and LoggedStudent (one-to-one)
Student.hasOne(LoggedStudent, {
  foreignKey: 'student_id',
});

LoggedStudent.belongsTo(Student, {
  foreignKey: 'student_id',
});

module.exports = db;
