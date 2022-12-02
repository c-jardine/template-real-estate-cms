import { defineType } from 'sanity';

export default defineType({
  name: 'cardPreview',
  title: 'Card Preview',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(256),
    },
  ],
});
