const { z } = require('zod');

const StudentSchema = z
  .object({
    id: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    profile_picture_url: z.string().nullable(),
    degree_id: z.string(),
    is_logged: z.boolean().optional(),
  })
  .transform(student => {
    return {
      id: student.id,
      firstName: student.first_name,
      lastName: student.last_name,
      profilePictureUrl: student.profile_picture_url,
      degreeId: student.degree_id,
      isLogged: student.is_logged,
    };
  });

module.exports = StudentSchema;
