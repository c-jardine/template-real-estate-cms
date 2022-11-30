import groq from 'groq';

export const propertyIdsQuery = groq`
  *[_type == "residentialProperty"] {_id}
`;

export const propertyByIdQuery = groq`
  *[_type == "residentialProperty" && _id == $id] {
    ...,
    "listing": listing{..., realtor->{slug, name, image}}
  }
`;

export const newPropertiesQuery = groq`
  *[_type == "residentialProperty"] {
    ...,
    "listing": listing{..., realtor->{slug, name, image}}
  }`;

export const filterPropertiesQuery = groq`
  *[_type == $propertyType
    && listing.for == $listingType
    && listing.price.amount >= $minPrice && listing.price.amount <= $maxPrice
    && features.bedrooms >= $bedrooms
    && features.bathrooms.full >= $bathrooms
  ] {...}
`;
