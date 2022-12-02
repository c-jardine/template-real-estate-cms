import { defineType } from 'sanity';

export default defineType({
  name: 'bathrooms',
  title: 'Bathrooms',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    {
      name: 'full',
      title: 'Full',
      type: 'number',
    },
    {
      name: 'half',
      title: 'Half',
      type: 'number',
    },
  ],
});
