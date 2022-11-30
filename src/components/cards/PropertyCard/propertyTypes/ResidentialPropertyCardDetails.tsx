import { chakra, Flex, Icon, Text } from '@chakra-ui/react';
import { FaBath } from '@react-icons/all-files/fa/FaBath';
import { FaBed } from '@react-icons/all-files/fa/FaBed';
import { FaRulerCombined } from '@react-icons/all-files/fa/FaRulerCombined';

const ResidentialPropertyCardBanner = (props) => {
  return (
    <>
      <Flex alignItems='center' gap={2}>
        <Icon as={FaRulerCombined} color='white' />
        <Text
          fontSize='xs'
          color='subtleText !important'
          fontWeight='semibold'
          textTransform='uppercase'
        >
          {Intl.NumberFormat().format(props.listing.size.size)}{' '}
          <chakra.span color='brand.500' fontSize='xx-small'>
            {props.listing.size.unit}
          </chakra.span>
        </Text>
      </Flex>
      <Flex alignItems='center' gap={2}>
        <Icon as={FaBed} color='white' />
        <Text
          fontSize='xs'
          color='subtleText !important'
          fontWeight='semibold'
          textTransform='uppercase'
        >
          {props.features.bedrooms}
        </Text>
      </Flex>
      <Flex alignItems='center' gap={2}>
        <Icon as={FaBath} color='white' />
        <Text
          lineHeight={1.5}
          fontSize='xs'
          color='subtleText !important'
          fontWeight='semibold'
          textTransform='uppercase'
        >
          {props.features.bathrooms.full} full{' '}
          <chakra.span fontWeight='black' color='brand.500' fontSize='sm'>
            |
          </chakra.span>{' '}
          {props.features.bathrooms.half} half
        </Text>
      </Flex>
    </>
  );
};

export default ResidentialPropertyCardBanner;
