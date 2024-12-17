const getFilterParams = query => {
  const { teacherIds, keywordIds, typeIds } = query;
  return {
    teacherIds: teacherIds ? teacherIds.split(',') : null,
    keywordIds: keywordIds ? keywordIds.split(',') : null,
    typeIds: typeIds ? typeIds.split(',') : null,
  };
};

module.exports = getFilterParams;
