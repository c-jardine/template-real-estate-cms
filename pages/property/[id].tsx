import { Box, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import { client, propertyByIdQuery, propertyIdsQuery } from '../../lib/sanity';
import { Carousel, PropertyPageDetails } from '../../src/components';
import { PropertyProps } from '../../src/types';

const PropertyPage: NextPage = (props: PropertyProps) => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, xl: 2 }}>
        <Box maxH={{ xl: 'calc(100vh - 7rem)' }} overflow={{ xl: 'hidden' }}>
          {props.listing.gallery && <Carousel images={props.listing.gallery} />}
        </Box>

        <PropertyPageDetails {...props} />
      </SimpleGrid>
    </Box>
  );
};

export const getStaticPaths = async () => {
  const data = await client(false).fetch(propertyIdsQuery);

  return {
    paths: data.map((property) => {
      return {
        params: {
          id: property._id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const data = await client(false).fetch(propertyByIdQuery, {
    id: context.params.id,
  });

  return { props: { ...data[0] } };
};

export default PropertyPage;
