import groq from 'groq';

export const getRealtorsQuery = groq`
  *[_type == "realtor"] {
  ...
}`;
