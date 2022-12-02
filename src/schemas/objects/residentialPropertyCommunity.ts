import { defineType } from 'sanity';

export default defineType({
  name: 'residentialPropertyCommunity',
  title: 'Community',
  type: 'object',
  fields: [
    {
      name: 'nearbySchools',
      title: 'Nearby schools',
      type: 'nearbySchools',
    },
  ],
});
