import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './sanity.server';

const builder = imageUrlBuilder(client(false));

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
