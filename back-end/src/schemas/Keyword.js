const { z } = require('zod');

const keywordSchema = z.object({
  id: z.number(),
  keyword: z.string(),
});

module.exports = keywordSchema;
