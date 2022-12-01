/**
 * Representation of the headers required to send requests to the Walk Score
 * API.
 */
interface WalkScoreRequestHeadersProps {
  'X-RapidAPI-Key': string;
  'X-RapidAPI-Host': string;
}

/**
 * Representation of the parameters required to send requests to the Walk Score
 * API.
 */
interface WalkScoreRequestParamsProps {
  lat: number;
  lon: number;
  address: string;
  wsapikey: string;
  bike?: 1;
  transit?: 1;
  format?: 'xml' | 'json';
}

/**
 * Representation of the required request options to make a successful call to
 * the Walk Score API.
 */
export interface WalkScoreRequestOptionsProps {
  method: 'GET';
  url: string;
  params: WalkScoreRequestParamsProps;
  headers: WalkScoreRequestHeadersProps;
}

/**
 * Representation of the Walk Score API response.
 * More information on the Walk Score API: https://www.walkscore.com/professional/api.php
 */
export interface WalkScoreResponseProps {
  status: 1 | 2 | 30 | 31 | 40 | 41 | 42;
  walkscore: number;
  description:
    | "Walker's Paradise"
    | 'Very Walkable'
    | 'Somewhat Walkable'
    | 'Car-Dependent';
  updated: string;
  logo_url: 'https://cdn.walk.sc/images/api-logo.png';
  more_info_icon: 'https://cdn.walk.sc/images/api-more-info.gif';
  more_info_link: 'https://www.walkscore.com/how-it-works/';
  ws_link: string;
  help_link: 'https://www.walkscore.com/how-it-works/';
  snapped_lat: number;
  snapped_lon: number;
  transit: {
    score: number;
    description:
      | "Rider's Paradise"
      | 'Excellent Transit'
      | 'Good Transit'
      | 'Some Transit'
      | 'Minimal Transit';
    summary: string;
  };
  bike: {
    score: number;
    description:
      | "Biker's Paradise"
      | 'Very Bikeable'
      | 'Bikeable'
      | 'Somewhat Bikeable';
  };
}
