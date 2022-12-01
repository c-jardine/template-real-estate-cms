import axios, { AxiosRequestConfig } from 'axios';
import {
  AddressProps,
  GeocodingRequestOptionsProps,
  WalkScoreRequestOptionsProps,
  WalkScoreResponseProps,
} from '../../src/types';

// Load env vars
const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY as string;
const GEOCODING_URL = process.env.NEXT_PUBLIC_GEOCODING_URL as string;
const GEOCODING_HOST = process.env.NEXT_PUBLIC_GEOCODING_HOST as string;
const WALKSCORE_URL = process.env.NEXT_PUBLIC_WALKSCORE_URL as string;
const WALKSCORE_HOST = process.env.NEXT_PUBLIC_WALKSCORE_HOST as string;
const WALKSCORE_API_KEY = process.env.NEXT_PUBLIC_WALKSCORE_API_KEY as string;

/**
 * The request parameters required to make call to the Google Geocoding API.
 * @param address - The address whose coordinates are being searched for.
 * @returns The request parameters as an object.
 */
const geocodingParams = (
  address: string
): AxiosRequestConfig<GeocodingRequestOptionsProps> => {
  return {
    method: 'GET',
    url: GEOCODING_URL,
    params: { address, language: 'en' },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': GEOCODING_HOST,
    },
  };
};

/**
 * The request parameters required to make call to the Walk Score API.
 * @param address - The address to find walk scores for. This is the address
 * at the coordinates provided in the coordinates parameter.
 * @param coordinates - The coordinates to find walk scores for. These are the
 * coordinates provided in the address parameter.
 * @returns The request parameters as an object.
 */
const walkscoreParams = (
  address: string,
  coordinates: { lat: number; lng: number }
): AxiosRequestConfig<WalkScoreRequestOptionsProps> => {
  return {
    method: 'GET',
    url: WALKSCORE_URL,
    params: {
      lat: coordinates.lat,
      address: address,
      wsapikey: WALKSCORE_API_KEY,
      lon: coordinates.lng,
      bike: 1,
      transit: 1,
      format: 'json', // API defaults to XML
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': WALKSCORE_HOST,
    },
  };
};

/**
 * The main function to retrieve the walk score. Internally, it calls both the
 * Google Geocoding API and the Walk Score API.
 * @param addressData - The address to find the walk scores for.
 * @returns The response from the Walk Score
 * API.
 */
const getWalkScore = async (
  addressData: AddressProps
): Promise<WalkScoreResponseProps> => {
  // Format the address to be sent to APIs.
  const address = `${addressData.street}, ${addressData.city}, ${addressData.state} ${addressData.zip}`;

  // Get coordinates from Google Geocoding API.
  const coordsRes = await axios.request(geocodingParams(address));
  const coordsData = await coordsRes.data;
  const coords = coordsData.results[0]?.geometry.location;

  // Get Walk Score from Walk Score API.
  const walkscoreRes = await axios.request(walkscoreParams(address, coords));
  const walkscoreData = await walkscoreRes.data;
  return walkscoreData;
};

export default getWalkScore;
