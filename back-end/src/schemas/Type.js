const { z } = require('zod');

const typeSchema = z.object({
  id: z.number(),
  type: z.string(),
});

module.exports = typeSchema;
