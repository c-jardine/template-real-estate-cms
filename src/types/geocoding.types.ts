/**
 * Representation of the headers required to send requests to the Google
 * Geocoding API.
 */
interface GeocodingRequestHeadersProps {
  /** The Rapid API key. */
  'X-RapidAPI-Key': string;
  /** The Rapid API host for the Google Geocoding API. */
  'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com';
}

/**
 * Representation of the parameters required to send requests to the Google
 * Geocoding API.
 */
interface GeocodingRequestParamsProps {
  /**
   * A string representation of an address, such as:
   * `'123 Main St, Toledo, OH 43604'`
   */
  address: string;
  /** The language used with the API. */
  language: 'en';
}

/**
 * Representation of the required request options to make a successful call to
 * the Google Geocoding API.
 */
export interface GeocodingRequestOptionsProps {
  /** The request method. */
  method: 'GET';
  /** The API endpoint, provided by Rapid API. */
  url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json';
  /**
   * The request parameters sent to the API.
   * @see {@link GeocodingRequestParamsProps}
   */
  params: GeocodingRequestParamsProps;
  /**
   * The request headers sent to the API.
   * @see {@link GeocodingRequestHeadersProps}
   */
  headers: GeocodingRequestHeadersProps;
}

/**
 * Representation of coordinates in latitude and longitude.
 */
export interface GeocodingCoordinatesProps {
  /** Number representing latitude. */
  lat: number;
  /** Number representing longitude. */
  lng: number;
}
