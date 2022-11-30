import axios from 'axios';

export interface WalkScoreProps {
  bike: { score: number; description: string };
  description: string;
  help_link: string;
  logo_url: string;
  more_info_icon: string;
  more_info_link: string;
  snapped_lat: number;
  snapped_lon: number;
  status: number;
  updated: string;
  walkscore: number;
  ws_link: string;
}

const geocodingParams = (address: string) => {
  return {
    method: 'GET',
    url: process.env.NEXT_PUBLIC_GEOCODING_URL,
    params: { address, language: 'en' },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_GEOCODING_HOST,
    },
  };
};

const walkscoreParams = (
  address: string,
  coordinates: { lat: number; lng: number }
) => {
  return {
    method: 'GET',
    url: process.env.NEXT_PUBLIC_WALKSCORE_URL,
    params: {
      lat: coordinates.lat,
      address: address,
      wsapikey: process.env.NEXT_PUBLIC_WALKSCORE_API_KEY,
      lon: coordinates.lng,
      bike: 1,
      transit: 1,
      format: 'json',
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_WALKSCORE_HOST,
    },
  };
};

const getWalkScore = async (addressData: {
  street: string;
  city: string;
  state: string;
  zip: string;
}): Promise<WalkScoreProps> => {
  const address = `${addressData.street}, ${addressData.city}, ${addressData.state} ${addressData.zip}`;
  const coordsRes = await axios.request(geocodingParams(address));
  const coordsData = await coordsRes.data;
  const coords = coordsData.results[0]?.geometry.location;

  const walkscoreRes = await axios.request(walkscoreParams(address, coords));
  const walkscoreData = await walkscoreRes.data;
  return walkscoreData;
};

export default getWalkScore;
