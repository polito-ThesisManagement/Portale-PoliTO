const selectThesisProposalAttributes = (lang, detailed = false) => {
  const attributes = [
    'id',
    [lang === 'it' ? 'topic' : 'topic_en', 'topic'],
    [lang === 'it' ? 'description' : 'description_en', 'description'],
    'is_internal',
    'is_abroad',
    'external_cosupervisors',
    'creation_date',
    'expiration_date',
  ];

  if (detailed) {
    attributes.push(
      'link',
      [lang === 'it' ? 'required_skills' : 'required_skills_en', 'required_skills'],
      [lang === 'it' ? 'additional_notes' : 'additional_notes_en', 'additional_notes'],
      'attachment_url',
    );
  }

  return attributes;
};

module.exports = selectThesisProposalAttributes;
