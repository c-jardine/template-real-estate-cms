import { chakra, Flex, Stack, Text, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/logo.svg';

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
      bg='socialBackground'
      rounded={'full'}
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
      color='white'
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const BrandColumn = () => {
  return (
    <Stack justifyContent='space-between' w='full' h='full' py={8} spacing={8}>
      <Flex
        flexDirection='column'
        alignItems={{ base: 'center', lg: 'flex-end' }}
        gap={4}
      >
        <Flex alignItems='center' gap={4}>
          <Image
            src={logo}
            alt='Logo'
            style={{
              objectFit: 'contain',
              height: '2rem',
              width: 'fit-content',
            }}
          />
          <Text
            fontSize='xl'
            letterSpacing='widest'
            textTransform='uppercase'
            color='white !important'
          >
            Logoipsum
          </Text>
        </Flex>

        <Stack direction={'row'} spacing={6}>
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
      <Text
        color='subtleText !important'
        fontWeight='medium'
        fontSize='sm'
        w='full'
        textAlign={{ base: 'center', lg: 'right' }}
        textTransform='uppercase'
      >
        Developed by Keplux Development
      </Text>
    </Stack>
  );
};

export default BrandColumn;
