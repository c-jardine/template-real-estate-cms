import axios, { AxiosRequestConfig } from 'axios';
import {
  AddressProps,
  GeocodingCoordinatesProps,
  GeocodingRequestOptionsProps,
  WalkScoreRequestOptionsProps,
  WalkScoreResponseProps,
} from '../../src/types';

const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const GEOCODING_URL = process.env.NEXT_PUBLIC_GEOCODING_URL;
const GEOCODING_HOST = process.env.NEXT_PUBLIC_GEOCODING_HOST;
const WALK_SCORE_URL = process.env.NEXT_PUBLIC_WALK_SCORE_URL;
const WALK_SCORE_HOST = process.env.NEXT_PUBLIC_WALK_SCORE_HOST;
const WALK_SCORE_API_KEY = process.env.NEXT_PUBLIC_WALK_SCORE_API_KEY;

/**
 * Helper that formats an address object into a string.
 * @param address - The address object to be formatted.
 * @returns The string representation of the address object.
 */
const _inlineAddress = (address: AddressProps) => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
};

/**
 * Helper to get the request options required by the Google Geocoding API.
 * @param address - The string-formatted address to be sent to the API.
 * @returns An Axios-style config object containing relevant options for the
 * API.
 */
const _getGeocodingOptions = (
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
 * Helper to get the request options required by the Walk Score API.
 * @param address - The string-formatted address to be sent to the API.
 * @param coordinates - The coordinates to be sent to the API.
 * @returns An Axios-style config object containing relevant options for the
 * API.
 */
const _getWalkScoreOptions = (
  address: string,
  coordinates: GeocodingCoordinatesProps
): AxiosRequestConfig<WalkScoreRequestOptionsProps> => {
  return {
    method: 'GET',
    url: WALK_SCORE_URL,
    params: {
      address: address,
      lat: coordinates.lat,
      lon: coordinates.lng,
      wsapikey: WALK_SCORE_API_KEY,
      bike: 1,
      transit: 1,
      format: 'json', // API defaults to XML
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': WALK_SCORE_HOST,
    },
  };
};

/**
 * Helper to get the coordinates for the provided address via the Google
 * Geocoding API.
 * @param address - The string-formatted address to be sent to the API.
 * @returns The coordinates for the provided address.
 */
const _getGeocodingCoordinates = async (
  address: string
): Promise<GeocodingCoordinatesProps> => {
  const res = await axios.request(_getGeocodingOptions(address));
  const data = await res.data;
  return data.results[0]?.geometry.location;
};

/**
 * Helper to get the Walk Score for the provided address and coordinates via
 * the Walk Score API.
 * @param address - The string-formatted address to be sent to the API.
 * @param coordinates - The coordinates to be sent to the API.
 * @returns The Walk Score for the provided address and coordinates.
 */
const _getWalkScore = async (
  address: string,
  coordinates: GeocodingCoordinatesProps
): Promise<WalkScoreResponseProps> => {
  const res = await axios.request(_getWalkScoreOptions(address, coordinates));
  const data = await res.data;
  return data;
};

/**
 * Get the Walk Score for the provided address via the Walk Score API. It
 * formats the address object, requests coordinates for the address, and
 * finally sends the data to the Walk Score API. It seems a bit convoluted,
 * but the Walk Score API requires both a string representation of an address
 * in addition to the coordinates for that address.
 * @param address - The address to be sent to the API.
 * @returns The Walk Score for the provided address.
 */
const requestWalkScore = async (
  address: AddressProps
): Promise<WalkScoreResponseProps> => {
  const _address = _inlineAddress(address);
  const _coordinates = await _getGeocodingCoordinates(_address);
  const walkScore = await _getWalkScore(_address, _coordinates);
  return walkScore;
};

export default requestWalkScore;
