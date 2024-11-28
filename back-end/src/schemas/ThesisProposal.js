const { z } = require('zod');

const keywordSchema = require('./Keyword');
const teacherSchema = require('./Teacher');
const typeSchema = require('./Type');

const thesisProposalOverviewSchema = z
  .object({
    id: z.number(),
    topic: z.string(),
    description: z.string(),
    link: z.string().nullable(),
    required_skills: z.string().nullable(),
    additional_notes: z.string().nullable(),
    external_cosupervisors: z.string().nullable(),
    creation_date: z.date(),
    expiration_date: z.date(),
    is_internal: z.boolean(),
    is_abroad: z.boolean(),
    keywords: z.array(keywordSchema).default([]),
    types: z.array(typeSchema).default([]),
    teachers: z.array(teacherSchema).default([]),
  })
  .transform(proposal => {
    const teachers = proposal.teachers;
    const supervisor = teachers.find(teacher => teacher['thesis-proposals-supervisors-cosupervisors'].is_supervisor);
    const internalCoSupervisors = teachers.filter(
      teacher => !teacher['thesis-proposals-supervisors-cosupervisors'].is_supervisor,
    );

    delete proposal.teachers;
    delete supervisor['thesis-proposals-supervisors-cosupervisors'];
    internalCoSupervisors.forEach(coSupervisor => delete coSupervisor['thesis-proposals-supervisors-cosupervisors']);

    return {
      id: proposal.id,
      topic: proposal.topic,
      description: proposal.description,
      link: proposal.link,
      requiredSkills: proposal.required_skills,
      additionalNotes: proposal.additional_notes,
      supervisor: supervisor ? supervisor : null,
      internalCoSupervisors,
      externalCoSupervisors: proposal.external_cosupervisors,
      creationDate: proposal.creation_date,
      expirationDate: proposal.expiration_date,
      isInternal: proposal.is_internal,
      isAbroad: proposal.is_abroad,
      keywords: proposal.keywords,
      types: proposal.types,
    };
  });

module.exports = thesisProposalOverviewSchema;
