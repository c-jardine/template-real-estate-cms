import { FaCog } from '@react-icons/all-files/fa/FaCog';
import { defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  icon: FaCog,
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'address'
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'contactInfo',
    },
  ],
});
