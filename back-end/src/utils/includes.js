const { Keyword, Teacher, Type } = require('../models');
const selectKeywordAttributes = require('./selectKeywordAttributes');
const selectTeacherAttributes = require('./selectTeacherAttributes');
const selectTypeAttributes = require('./selectTypeAttributes');

const getIncludes = (lang, detailed = false) => [
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
    attributes: detailed === true ? selectTeacherAttributes(detailed) : selectTeacherAttributes(),
  },
];

module.exports = {
  getIncludes,
};
