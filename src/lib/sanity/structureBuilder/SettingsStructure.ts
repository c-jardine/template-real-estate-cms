import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';
import { StructureBuilder } from 'sanity/desk';
import { settingsType } from '../../../schemas/documents';

const SettingsStructure = (S: StructureBuilder) => {
  return S.listItem()
    .title(settingsType.title)
    .icon(settingsType.icon)
    .child(
      S.list()
        .title(settingsType.title)
        .items([
          S.listItem()
            .title('Business Information')
            .icon(FaBriefcase)
            .child(
              S.document()
                .id(settingsType.name)
                .schemaType(settingsType.name)
                .documentId(settingsType.name)
            ),
        ])
    );
};

export default SettingsStructure;
