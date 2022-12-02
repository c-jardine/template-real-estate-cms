// Import objects
import addressType from './objects/address';
import bathroomsType from './objects/bathrooms';
import cardPreviewType from './objects/cardPreview';
import contactInfoType from './objects/contactInfo';
import listingType from './objects/listing';
import nearbySchoolsType from './objects/nearbySchools';
import priceType from './objects/price';
import propertySizeType from './objects/propertySize';
import residentialPropertyCommunityType from './objects/residentialPropertyCommunity';
import residentialPropertyFeaturesType from './objects/residentialPropertyFeatures';
import socialLinksType from './objects/socialLinks';

// Import documents
import { faqType, settingsType } from './documents';
import commercialPropertyType from './documents/commercialProperty';
import landPropertyType from './documents/landProperty';
import realtorType from './documents/realtor';
import residentialPropertyType from './documents/residentialProperty';
import { questionType } from './objects';

const objects = [
  socialLinksType,
  contactInfoType,
  addressType,
  propertySizeType,
  cardPreviewType,
  listingType,
  priceType,
  bathroomsType,
  nearbySchoolsType,
  residentialPropertyFeaturesType,
  residentialPropertyCommunityType,
  questionType,
];

const documents = [
  realtorType,
  residentialPropertyType,
  commercialPropertyType,
  landPropertyType,
  settingsType,
  faqType,
];

export const schemaTypes = [...objects, ...documents];
