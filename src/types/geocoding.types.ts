/**
 * Representation of the headers required to send requests to the Google
 * Geocoding API.
 */
interface GeocodingRequestHeadersProps {
  'X-RapidAPI-Key': string;
  'X-RapidAPI-Host': string;
}

/**
 * Representation of the parameters required to send requests to the Google
 * Geocoding API.
 */
interface GeocodingRequestParamsProps {
  address: string;
  language: 'en';
}

/**
 * Representation of the required request options to make a successful call to
 * the Google Geocoding API.
 */
export interface GeocodingRequestOptionsProps {
  method: 'GET';
  url: string;
  params: GeocodingRequestParamsProps;
  headers: GeocodingRequestHeadersProps;
}
