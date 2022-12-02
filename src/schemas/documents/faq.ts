import { FaQuestionCircle } from '@react-icons/all-files/fa/FaQuestionCircle';
import { defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  icon: FaQuestionCircle,
  type: 'document',
  fields: [
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'question' }],
    },
  ],
});
