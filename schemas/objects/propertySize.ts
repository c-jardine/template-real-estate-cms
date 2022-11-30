import { defineType } from 'sanity';

export default defineType({
  name: 'propertySize',
  title: 'Size',
  type: 'object',
  options: { columns: 2 },
  fields: [
    {
      name: 'size',
      title: 'Size',
      type: 'number',
      validation: (Rule: any) => Rule.required().greaterThan(0),
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [
          { title: 'square feet', value: 'sq. ft.' },
          { title: 'square meters', value: 'sq. m.' },
          { title: 'acres', value: 'acres' },
          { title: 'hectares', value: 'hectares' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
});
