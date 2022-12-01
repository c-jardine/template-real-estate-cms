import { Link, Stack, Text } from '@chakra-ui/react';

const NavigationColumn = () => {
  return (
    <Stack>
      <Text
        color="headerText !important"
        fontSize="xl"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Navigation
      </Text>
      <Stack spacing={4}>
        <Link
          href="/home"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          Home
        </Link>
        <Link
          href="/about"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          About
        </Link>
        <Link
          href="/faq"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          letterSpacing="wide"
          lineHeight={1}
          fontSize="sm"
          textTransform="uppercase"
          color="bodyText"
          fontWeight="light"
          transition="200ms ease-in-out"
          _hover={{ color: 'brand.500' }}
        >
          Contact
        </Link>
      </Stack>
    </Stack>
  );
};

export default NavigationColumn;
