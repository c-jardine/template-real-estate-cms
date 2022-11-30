import { Box, chakra, Text } from '@chakra-ui/react';
import { PropertyProps } from '../../../types';
import { Header } from '../../core';
import { ResidentialPropertyDetails } from '../ResidentialPropertyDetails';

const PropertyPageDetails = (props: PropertyProps) => {
  return (
    <Box
      h='full'
      maxH={{ xl: 'calc(100vh - 7rem)' }}
      overflowY={{ xl: 'auto' }}
    >
      <Box p={{ base: 4, lg: 8 }}>
        <Header
          title={props.cardPreview.title}
          subtitle={`${props.listing.address.city}, ${props.listing.address.state}`}
        />
        <Text fontSize='4xl' fontWeight='bold' lineHeight={1} mt={4}>
          ${Intl.NumberFormat().format(props.listing.price.amount)}{' '}
          <chakra.span fontWeight='semibold' fontSize='lg' color='brand.500'>
            {props.listing.price.frequency}
          </chakra.span>
        </Text>
        {props.listing.for === 'rental' && (
          <Text>
            Included utilities:{' '}
            {props.includedUtilities?.toString().replaceAll(',', ', ')}
          </Text>
        )}
      </Box>
      <ResidentialPropertyDetails {...props} />
    </Box>
  );
};

export default PropertyPageDetails;
