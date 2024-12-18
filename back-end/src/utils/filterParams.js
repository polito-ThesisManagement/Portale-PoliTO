const getFilterParams = query => {
  const { teacherIds, keywordIds, typeIds, searchQuery } = query;
  return {
    teacherIds: teacherIds ? teacherIds.split(',') : null,
    keywordIds: keywordIds ? keywordIds.split(',') : null,
    typeIds: typeIds ? typeIds.split(',') : null,
    searchQuery: searchQuery || '',
  };
};

module.exports = getFilterParams;
