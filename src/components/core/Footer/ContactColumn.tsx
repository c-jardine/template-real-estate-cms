import { Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaLocationArrow } from '@react-icons/all-files/fa/FaLocationArrow';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';

const ContactColumn = () => {
  return (
    <Stack>
      <Text
        color="headerText !important"
        fontSize="xl"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Contact
      </Text>
      <Stack spacing={4}>
        <Flex alignItems="center" gap={2}>
          <Icon as={FaLocationArrow} w={4} h={4} color="brand.500" />
          <Text
            letterSpacing="wide"
            lineHeight={1}
            fontSize="sm"
            textTransform="uppercase"
          >
            123 Main St | Toledo, OH 43604
          </Text>
        </Flex>

        <Flex alignItems="center" gap={2}>
          <Icon as={FaEnvelope} w={4} h={4} color="brand.500" />
          <Link
            href="mailto:lorem@ipsum.com"
            letterSpacing="wide"
            lineHeight={1}
            fontSize="sm"
            textTransform="uppercase"
            color="bodyText"
            fontWeight="light"
            transition="200ms ease-in-out"
            _hover={{ color: 'brand.500' }}
          >
            lorem@ipsum.com
          </Link>
        </Flex>

        <Flex alignItems="center" gap={2}>
          <Icon as={FaPhone} w={4} h={4} color="brand.500" />
          <Link
            href="tel:+14195555555"
            letterSpacing="wide"
            lineHeight={1}
            fontSize="sm"
            textTransform="uppercase"
            color="bodyText"
            fontWeight="light"
            transition="200ms ease-in-out"
            _hover={{ color: 'brand.500' }}
          >
            (419) 555-5555
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default ContactColumn;
