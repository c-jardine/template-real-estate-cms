import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface RealtorCardSocialLinkProps {
  ariaLabel: string;
  icon: any;
  href: string;
}

export interface RealtorCardProps {
  id: number;
  image: SanityImageSource;
  name: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    email: string;
  };
}
