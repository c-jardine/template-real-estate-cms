import {
  Box,
  chakra,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Header } from '../../core';

const Label = (props) => {
  return (
    <Box position="absolute" bottom={0} w="full" bg="rgba(24,25,29,0.95)" p={4}>
      <Text
        color="white !important"
        fontSize="lg"
        textTransform="uppercase"
        letterSpacing="widest"
      >
        {props.title}
      </Text>
      <Text fontSize="sm">
        <chakra.span color="brand.500" fontWeight="semibold">
          {props.available}
        </chakra.span>{' '}
        <chakra.span color="subtleText">Properties</chakra.span>
      </Text>
    </Box>
  );
};

const PropertyTypes = () => {
  return (
    <Stack w="full" alignItems="center" spacing={16}>
      <Header
        center
        title="Available Properties"
        subtitle="View our selection"
      />
      <SimpleGrid columns={{ base: 1, xl: 4 }} gap={4} maxW="8xl" w="full">
        <Box
          as={Link}
          gridRow={{ base: '1', xl: '1 / span 2' }}
          gridColumn={{ base: '1', xl: '1 / span 2' }}
          role="group"
          position="relative"
          overflow="hidden"
          maxH={{ base: 96, xl: 'container.sm' }}
        >
          <Image
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            objectFit="cover"
            h="full"
            w="full"
            transition="200ms ease-in-out"
            _groupHover={{ transform: { lg: 'scale(1.1)' } }}
          />
          <Label title="Houses" available={13} />
        </Box>
        <SimpleGrid
          gridRow={{ xl: '1 / span 2' }}
          gridColumn={{ base: '1', xl: '3 / span 2' }}
          columns={2}
          gap={4}
          maxH={{ xl: 'container.sm' }}
          templateRows="1fr 1fr"
        >
          <Box
            as={Link}
            role="group"
            position="relative"
            gridColumn="1 / span 2"
            gridRow={{ base: '1', xl: '1' }}
            overflow="hidden"
            maxH={96}
          >
            <Image
              src="https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=615&q=80"
              alt=""
              objectFit="cover"
              h="full"
              w="full"
              transition="200ms ease-in-out"
              _groupHover={{ transform: { lg: 'scale(1.1)' } }}
            />
            <Label title="Apartments" available={7} />
          </Box>
          <Box
            as={Link}
            role="group"
            position="relative"
            gridColumn={{ base: '1 / span 2', md: '1' }}
            gridRow={{ base: '2', xl: '2' }}
            overflow="hidden"
            maxH={96}
          >
            <Image
              src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80"
              alt=""
              objectFit="cover"
              h="full"
              w="full"
              transition="200ms ease-in-out"
              _groupHover={{ transform: { lg: 'scale(1.1)' } }}
            />
            <Label title="Commercial" available={5} />
          </Box>
          <Box
            as={Link}
            role="group"
            position="relative"
            gridColumn={{ base: '1 / span 2', md: '2', xl: '2' }}
            gridRow={{ base: '3', md: '2' }}
            overflow="hidden"
            maxH={96}
          >
            <Image
              src="https://images.unsplash.com/photo-1540470174401-f25e9eb17c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
              alt=""
              objectFit="cover"
              h="full"
              w="full"
              transition="200ms ease-in-out"
              _groupHover={{ transform: { lg: 'scale(1.1)' } }}
            />
            <Label title="Land" available={4} />
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    </Stack>
  );
};

export default PropertyTypes;
