import { GiHouseKeys } from '@react-icons/all-files/gi/GiHouseKeys';
import { StructureBuilder } from 'sanity/desk';
import {
  commercialPropertyType,
  landPropertyType,
  residentialPropertyType,
} from '../../../schemas/documents';

const PropertiesStructure = (S: StructureBuilder) => {
  return S.listItem()
    .title('Properties')
    .icon(GiHouseKeys)
    .child(
      S.list()
        .title('Properties')
        .items([
          S.listItem()
            .title(residentialPropertyType.title)
            .icon(residentialPropertyType.icon)
            .child(
              S.documentList()
                .title(residentialPropertyType.title)
                .filter('_type == "residentialProperty"')
            ),
          S.listItem()
            .title(commercialPropertyType.title)
            .icon(commercialPropertyType.icon)
            .child(
              S.documentList()
                .title(commercialPropertyType.title)
                .filter('_type == "commercialProperty"')
            ),
          S.listItem()
            .title(landPropertyType.title)
            .icon(landPropertyType.icon)
            .child(
              S.documentList()
                .title(landPropertyType.title)
                .filter('_type == "landProperty"')
            ),
        ])
    );
};

export default PropertiesStructure;
