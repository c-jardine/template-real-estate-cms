import { defineType } from 'sanity';

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  options: { columns: 2 },
  fields: [
    {
      name: 'street',
      title: 'Street',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'zip',
      title: 'Zip',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
});
