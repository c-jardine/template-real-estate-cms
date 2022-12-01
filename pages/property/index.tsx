import {
  Box,
  Button,
  Container,
  Flex,
  Show,
  SimpleGrid,
  Slide,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { client, filterPropertiesQuery } from '../../lib/sanity';
import { Header, PropertyCard } from '../../src/components';
import { PropertyFilters } from '../../src/components/filters';
import { initialFilters } from '../../src/redux/slices/filtersSlice';
import { PropertyProps } from '../../src/types';

const PropertyPageIndex: NextPage = (props: {
  properties: PropertyProps[];
}) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [results, setResults] = React.useState(props.properties);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW="8xl" w="full" my={{ base: 4, md: 16 }}>
      <Show below="lg">
        <Button onClick={onToggle} colorScheme="brand" w="full" mb={4}>
          Filter
        </Button>
      </Show>

      <SimpleGrid columns={{ base: 1, md: 5 }}>
        {/* Filter column */}
        <Show below="lg">
          <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
            <Box
              h="75vh"
              overflowY="auto"
              bg="white"
              p={{ base: 4, md: 8 }}
              shadow="dark-lg"
            >
              <Button w="full" mb={4} onClick={onToggle}>
                Cancel
              </Button>
              <Box maxW="sm" w="full" mx="auto">
                <PropertyFilters
                  loading={loading}
                  setLoading={setLoading}
                  setResults={setResults}
                />
              </Box>
            </Box>
          </Slide>
        </Show>
        <Show above="lg">
          <PropertyFilters
            loading={loading}
            setLoading={setLoading}
            setResults={setResults}
          />
        </Show>
        {/* Results column */}
        <Box gridColumn="2 / span 4" px={{ base: 2, sm: 4, lg: 8 }}>
          {loading ? (
            <Flex justifyContent="center">
              <Spinner size="xl" color="brand.500" />
            </Flex>
          ) : results.length === 0 ? (
            <Box>
              <Header
                title="No results found"
                subtitle="Try broadening your search parameters"
              />
            </Box>
          ) : (
            <SimpleGrid columns={2} gap={4}>
              {results.map((property, index) => (
                <Box key={index}>
                  <PropertyCard {...property} />
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export const getStaticProps = async () => {
  const data = await client(false).fetch(filterPropertiesQuery, initialFilters);

  return { props: { properties: data } };
};

export default PropertyPageIndex;
