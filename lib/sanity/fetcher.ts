import { client } from './sanity.server';

export const sanityFetcherSWR = (query) => client(false).fetch(query);
