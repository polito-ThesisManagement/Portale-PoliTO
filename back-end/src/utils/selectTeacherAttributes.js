const selectTeacherAttributes = (detailed = false) => {
  const attributes = ['id', 'first_name', 'last_name'];

  if (detailed) {
    attributes.push('role', 'email', 'profile_url', 'facility_short_name');
  }
  return attributes;
};

module.exports = selectTeacherAttributes;
