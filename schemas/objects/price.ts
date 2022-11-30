import { defineType } from 'sanity';

export default defineType({
  name: 'price',
  title: 'Price',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule: any) => Rule.greaterThan(0),
    },
    {
      name: 'frequency',
      title: 'Frequency',
      type: 'string',
      options: {
        list: [
          { title: 'Flat', value: '' },
          { title: 'Weekly', value: 'per week' },
          { title: 'Monthly', value: 'per month' },
          { title: 'Yearly', value: 'per year' },
        ],
      },
    },
  ],
});
