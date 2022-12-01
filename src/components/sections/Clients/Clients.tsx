import { Image, SimpleGrid, Stack } from '@chakra-ui/react';
import { Header } from '../../core';

const Clients = () => {
  return (
    <Stack w="full" alignItems="center" spacing={16}>
      <Header
        center
        title="Our Clients"
        subtitle="Some businesses we've worked with"
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap={16}
        alignItems="center"
      >
        <Image
          justifySelf="center"
          h={16}
          src="/client-logos/logo-1.svg"
          alt="Logo"
          filter="saturate(0%)"
          opacity={0.25}
          transition="200ms ease-in-out"
          _hover={{ filter: 'saturate(100%)', opacity: 1 }}
        />
        <Image
          justifySelf="center"
          h={12}
          src="/client-logos/logo-2.svg"
          alt="Logo"
          filter="saturate(0%)"
          opacity={0.25}
          transition="200ms ease-in-out"
          _hover={{ filter: 'saturate(100%)', opacity: 1 }}
        />
        <Image
          justifySelf="center"
          h={24}
          src="/client-logos/logo-3.svg"
          alt="Logo"
          filter="saturate(0%)"
          opacity={0.25}
          transition="200ms ease-in-out"
          _hover={{ filter: 'saturate(100%)', opacity: 1 }}
        />
        <Image
          justifySelf="center"
          h={16}
          src="/client-logos/logo-4.svg"
          alt="Logo"
          filter="saturate(0%)"
          opacity={0.25}
          transition="200ms ease-in-out"
          _hover={{ filter: 'saturate(100%)', opacity: 1 }}
        />
      </SimpleGrid>
    </Stack>
  );
};

export default Clients;
