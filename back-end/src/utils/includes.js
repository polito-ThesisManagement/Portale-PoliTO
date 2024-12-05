const { Keyword, Teacher, Type } = require('../models');
const selectKeywordAttributes = require('./selectKeywordAttributes');
const selectTeacherAttributes = require('./selectTeacherAttributes');
const selectTypeAttributes = require('./selectTypeAttributes');

const getIncludes = lang => [
  {
    model: Keyword,
    through: { attributes: [] },
    attributes: selectKeywordAttributes(lang),
  },
  {
    model: Type,
    through: { attributes: [] },
    attributes: selectTypeAttributes(lang),
  },
  {
    model: Teacher,
    through: { attributes: ['is_supervisor'] },
    attributes: selectTeacherAttributes(),
  },
];

module.exports = {
  getIncludes,
};
