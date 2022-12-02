import { defineType } from 'sanity';

export default defineType({
  name: 'socialLinks',
  title: 'Social Media Links',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    { name: 'linkedin', title: 'LinkedIn', type: 'string' },
    { name: 'facebook', title: 'Facebook', type: 'string' },
    { name: 'twitter', title: 'Twitter', type: 'string' },
    { name: 'instagram', title: 'Instagram', type: 'string' },
  ],
});
