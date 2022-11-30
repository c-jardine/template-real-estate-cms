import { Box, Container, Image, Text, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import {
  client,
  propertiesByRealtorQuery,
  realtorBySlugQuery,
  realtorSlugsQuery,
  urlFor,
} from '../../lib/sanity';

const AgentPage: NextPage = (props) => {
  return (
    <Container maxW="8xl" w="full" mx="auto">
      <SimpleGrid columns={4}>
        <Box>
          <Image src={urlFor(props.realtor.image).url()} />
          <Text>{props.realtor.name}</Text>
        </Box>
        <Box columnGap="2 / span 3">
          <Text>{props.realtor.bio}</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const data = await client(false).fetch(realtorSlugsQuery);

  return {
    paths: data.map((realtor) => {
      return {
        params: {
          slug: realtor.slug.current,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const realtorData = await client(false).fetch(realtorBySlugQuery, {
    realtorSlug: context.params.slug,
  });

  const propertyData = await client(false).fetch(propertiesByRealtorQuery, {
    realtorSlug: context.params.slug,
  });

  return { props: { realtor: realtorData[0], properties: propertyData } };
};

export default AgentPage;
