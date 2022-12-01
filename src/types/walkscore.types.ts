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

/**
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
