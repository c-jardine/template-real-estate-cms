import { defineType } from 'sanity';

export default defineType({
  name: 'nearbySchools',
  title: 'Nearby Schools',
  type: 'object',
  fields: [
    {
      name: 'elementary',
      title: 'Elementary',
      type: 'string',
    },
    {
      name: 'middle',
      title: 'Middle',
      type: 'string',
    },
    {
      name: 'high',
      title: 'High',
      type: 'string',
    },
  ],
});
