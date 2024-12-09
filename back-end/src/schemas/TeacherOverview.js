const { z } = require('zod');

const teacherOverviewSchema = z
  .object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    'thesis-proposal-supervisor-cosupervisor': z
      .object({
        is_supervisor: z.boolean().optional(),
      })
      .optional(),
  })
  .transform(teacher => ({
    id: teacher.id,
    firstName: teacher.first_name,
    lastName: teacher.last_name,
    isSupervisor: teacher['thesis-proposal-supervisor-cosupervisor']?.is_supervisor ?? undefined,
  }));

module.exports = teacherOverviewSchema;
