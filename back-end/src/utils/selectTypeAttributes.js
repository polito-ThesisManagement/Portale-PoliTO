const selectTypeAttributes = lang => {
  const attributes = ['id', [lang === 'it' ? 'type' : 'type_en', 'type']];
  return attributes;
};

module.exports = selectTypeAttributes;
