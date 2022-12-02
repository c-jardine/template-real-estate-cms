import {
  Box,
  chakra,
  Flex,
  Icon,
  Link,
  Stack,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import React from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="socialBackground"
      rounded={'full'}
      p={2}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 200ms ease'}
      _hover={{
        bg: 'brand.500',
      }}
      color="white"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const InformationBar = () => {
  return (
    <Box bg="chalkboard" p={2}>
      <Flex
        mx="auto"
        maxW="8xl"
        w="full"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        <Stack direction="row" gap={8}>
          <Flex gap={2} alignItems="center">
            <Icon as={FaPhone} w={3} h={3} color="brand.500" />
            <Link
              color="white"
              fontSize="xs"
              letterSpacing={1}
              textTransform="uppercase"
              transition="200ms ease-in-out"
              _hover={{ color: 'brand.500' }}
            >
              (419) 555-5555
            </Link>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Icon as={FaEnvelope} w={3} h={3} color="brand.500" />
            <Link
              color="white"
              fontSize="xs"
              letterSpacing={1}
              textTransform="uppercase"
              transition="200ms ease-in-out"
              _hover={{ color: 'brand.500' }}
            >
              lorem@ipsum.com
            </Link>
          </Flex>
        </Stack>
        <Stack
          display={{ base: 'none', sm: 'flex' }}
          direction={'row'}
          spacing={6}
        >
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter size={16} />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube size={16} />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram size={16} />
          </SocialButton>
        </Stack>
      </Flex>
    </Box>
  );
};

export default InformationBar;
