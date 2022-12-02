import { defineType } from 'sanity';

export default defineType({
  name: 'question',
  title: 'Question',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'string',
    },
  ],
});
