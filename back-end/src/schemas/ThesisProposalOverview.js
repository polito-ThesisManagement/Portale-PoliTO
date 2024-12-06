const { z } = require('zod');

const keywordSchema = require('./Keyword');
const teacherOverviewSchema = require('./TeacherOverview');
const typeSchema = require('./Type');

const thesisProposalOverviewSchema = z
  .object({
    id: z.number(),
    topic: z.string(),
    description: z.string(),
    creation_date: z.date(),
    expiration_date: z.date(),
    is_internal: z.boolean(),
    is_abroad: z.boolean(),
    keywords: z.array(keywordSchema).default([]),
    types: z.array(typeSchema).default([]),
    teachers: z.array(teacherOverviewSchema).default([]),
  })
  .transform(proposal => {
    const teachers = proposal.teachers;
    const supervisor = teachers.find(teacher => teacher.isSupervisor);
    const internalCoSupervisors = teachers.filter(teacher => !teacher.isSupervisor);

    delete proposal.teachers;
    delete supervisor.isSupervisor;
    internalCoSupervisors.forEach(coSupervisor => delete coSupervisor.isSupervisor);

    return {
      id: proposal.id,
      topic: proposal.topic,
      description: proposal.description,
      supervisor: supervisor ? supervisor : null,
      internalCoSupervisors,
      creationDate: proposal.creation_date,
      expirationDate: proposal.expiration_date,
      isInternal: proposal.is_internal,
      isAbroad: proposal.is_abroad,
      keywords: proposal.keywords,
      types: proposal.types,
    };
  });

module.exports = thesisProposalOverviewSchema;
