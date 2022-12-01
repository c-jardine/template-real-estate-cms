import { Box, Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { getRealtorsQuery, sanityFetcherSWR } from '../../../../lib/sanity';
import { RealtorCard } from '../../cards';
import { Header } from '../../core';

const RealtorCards = () => {
  const { data: realtors, error } = useSWR(getRealtorsQuery, sanityFetcherSWR);

  if (error) return <Text>Failed</Text>;

  return (
    <Box maxW="8xl" mx="auto" px={{ base: 4, '2xl': 0 }}>
      <Header
        center
        title="Our Agents"
        subtitle="Meet our professional, licensed team"
      />
      {!realtors ? (
        <Flex justifyContent="center" alignItems="center" h={64}>
          <Spinner color="brand.500" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} mt={16} gap={16}>
          {realtors.map((realtor) => (
            <RealtorCard key={realtor.id} {...realtor} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default RealtorCards;
