const { z } = require('zod');

const teacherSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.string(),
  email: z.string(),
  profile_url: z.string(),
  profile_picture_url: z.string().nullable(),
  facility_short_name: z.string(),
  'thesis-proposal-supervisor-cosupervisor': z.object({
    is_supervisor: z.boolean(),
  }),
});

module.exports = teacherSchema;
