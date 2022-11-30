import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { client, propertyByIdQuery, propertyIdsQuery } from '../../lib/sanity';
import { Carousel, PropertyPageDetails } from '../../src/components';
import { PropertyProps } from '../../src/types';

const PropertyPage: NextPage = (props: PropertyProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imgSrc, setImgSrc] = React.useState<string>(null);

  const handleOnOpen = (imgSrc: string) => {
    setImgSrc(imgSrc);
    onOpen();
  };

  const handleOnClose = () => {
    setImgSrc(null);
    onClose();
  };

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
  const data = await client.fetch(propertyIdsQuery);

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
  const data = await client.fetch(propertyByIdQuery, { id: context.params.id });

  return { props: { ...data[0] } };
};

export default PropertyPage;
