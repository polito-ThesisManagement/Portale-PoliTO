const { z } = require('zod');

const teacherOverviewSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  'thesis-proposal-supervisor-cosupervisor': z.object({
    is_supervisor: z.boolean(),
  }),
});

module.exports = teacherOverviewSchema;
