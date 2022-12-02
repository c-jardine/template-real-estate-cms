import {
  Box,
  Flex,
  Icon as ChakraIcon,
  Link,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import useSWR from 'swr';
import { sanityFetcherSWR } from '../../../lib/sanity';
import { allPropertiesQuery } from '../../../lib/sanity/queries';
import { Header } from '../../core/Header';
import PropertyCard from './PropertyCard';

const PropertyCards = () => {
  const { data: properties, error } = useSWR(
    allPropertiesQuery,
    sanityFetcherSWR
  );

  if (error) return <Text>Failed</Text>;

  return (
    <Box maxW="1920px" w="full">
      <Box px={{ base: 5, md: 10 }}>
        <Header title="Browse properties" subtitle="Find Your Dream Home" />
      </Box>

      {!properties ? (
        <Flex justifyContent="center" alignItems="center" h={64}>
          <Spinner color="brand.500" />
        </Flex>
      ) : (
        <SimpleGrid
          columns={{ base: 1, md: 2, '2xl': 4 }}
          px={{ base: 4 }}
          alignItems="flex-start"
          mt={16}
          rowGap={16}
          columnGap={4}
          maxW="1920px"
        >
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </SimpleGrid>
      )}
      <Box maxW="8xl" w="full" mx="auto">
        <Link
          href="/property"
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
          w="fit-content"
          mt={12}
          role="group"
        >
          <Text textStyle="link" variant="upperWide" px={{ base: 4, '2xl': 0 }}>
            View all properties
          </Text>
          <ChakraIcon as={BsArrowRight} h={5} w={5} color="bodyText" />
        </Link>
      </Box>
    </Box>
  );
};

export default PropertyCards;
