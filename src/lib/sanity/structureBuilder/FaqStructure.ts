import { StructureBuilder } from 'sanity/desk';
import { faqType } from '../../../schemas/documents';

const FaqStructure = (S: StructureBuilder) => {
  return S.listItem()
    .title(faqType.title)
    .icon(faqType.icon)
    .child(
      S.document()
        .title(faqType.title)
        .id(faqType.name)
        .schemaType(faqType.name)
        .documentId(faqType.name)
    );
};

export default FaqStructure;
