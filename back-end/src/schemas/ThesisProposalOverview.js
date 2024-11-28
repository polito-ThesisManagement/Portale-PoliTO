const { z } = require('zod');

const keywordSchema = require('./Keyword');
const teacherOverviewSchema = require('./TeacherOverview');

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
    teachers: z.array(teacherOverviewSchema).default([]),
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
      supervisor: supervisor ? supervisor : null,
      internalCoSupervisors,
      creationDate: proposal.creation_date,
      expirationDate: proposal.expiration_date,
      isInternal: proposal.is_internal,
      isAbroad: proposal.is_abroad,
      keywords: proposal.keywords,
    };
  });

module.exports = thesisProposalOverviewSchema;
