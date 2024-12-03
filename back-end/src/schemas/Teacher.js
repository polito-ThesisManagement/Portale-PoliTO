const { z } = require('zod');

const teacherSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.string(),
  email: z.string(),
  profile_url: z.string(),
  facility_short_name: z.string(),
  'thesis-proposals-supervisors-cosupervisors': z.object({
    is_supervisor: z.boolean(),
  }),
});

module.exports = teacherSchema;
