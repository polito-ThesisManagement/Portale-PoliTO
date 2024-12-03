const selectKeywordAttributes = lang => {
  const attributes = ['id', [lang === 'it' ? 'keyword' : 'keyword_en', 'keyword']];

  return attributes;
};

module.exports = selectKeywordAttributes;
