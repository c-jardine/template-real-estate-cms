export interface ResidentialPropertyProps {
  type: 'Single-family' | 'Multi-family' | 'Townhouse' | 'Condominium';
  bedrooms: number;
  bathrooms: {
    full: number;
    half: number;
  };
  garage: string;
  driveway: string;
  basement: string;
  attic: string;
  coolingType: string[];
  heatingType: string[];
  heatingFuel: string[];
}
