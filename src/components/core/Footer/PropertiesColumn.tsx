import { Link, Stack, Text } from '@chakra-ui/react';

const PropertiesColumn = () => {
  return (
    <Stack>
      <Text
        color="headerText !important"
        fontSize="xl"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Properties
      </Text>
      <Stack spacing={4}>
        <Link
          href="#"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          Houses
        </Link>
        <Link
          href="#"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          Apartments
        </Link>
        <Link
          href="#"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          Commercial Spaces
        </Link>
        <Link
          href="#"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          Land
        </Link>
      </Stack>
    </Stack>
  );
};

export default PropertiesColumn;
