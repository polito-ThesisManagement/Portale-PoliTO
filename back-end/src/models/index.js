const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const ThesisProposal = require('./thesis-proposals')(sequelize, Sequelize.DataTypes);
const Keyword = require('./keywords')(sequelize, Sequelize.DataTypes);
const ThesisProposalKeyword = require('./thesis-proposals-keywords')(sequelize, Sequelize.DataTypes);
const Type = require('./types')(sequelize, Sequelize.DataTypes);
const ThesisProposalType = require('./thesis-proposals-types')(sequelize, Sequelize.DataTypes);
const Teacher = require('./teachers')(sequelize, Sequelize.DataTypes);
const ThesisProposalSupervisorCoSupervisor = require('./thesis-proposals-supervisors-cosupervisors')(
  sequelize,
  Sequelize.DataTypes,
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.ThesisProposal = ThesisProposal;
db.Keyword = Keyword;
db.ThesisProposalKeyword = ThesisProposalKeyword;
db.Type = Type;
db.ThesisProposalType = ThesisProposalType;
db.Teacher = Teacher;
db.ThesisProposalSupervisorCoSupervisor = ThesisProposalSupervisorCoSupervisor;

// Define relationships

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

module.exports = db;
