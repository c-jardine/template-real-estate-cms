import {
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { NextPage } from 'next';
import {
  client,
  propertiesByRealtorQuery,
  realtorBySlugQuery,
  realtorSlugsQuery,
  urlFor,
} from '../../lib/sanity';
import {
  Header,
  PropertyCard,
  RealtorCardSocialLinkProps,
} from '../../src/components';
import { RealtorPageProps } from '../../src/types';

const SocialLink = (props: RealtorCardSocialLinkProps) => {
  return (
    <Link as={Flex} role="group">
      <Icon
        aria-label={props.ariaLabel}
        as={props.icon}
        w={6}
        h={6}
        color="bodyText"
        transition="200ms ease-in-out"
        _groupHover={{ color: 'brand.500' }}
      />
    </Link>
  );
};

const AgentPage: NextPage = (props: RealtorPageProps) => {
  return (
    <Container maxW="8xl" w="full" mx="auto">
      <Stack spacing={16}>
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          gap={8}
          maxW="4xl"
          w="full"
          mx="auto"
        >
          <Flex flexDirection="column" alignItems="center">
            <Box maxW={64} w="full" h="full">
              <Image
                src={urlFor(props.realtor.image).url()}
                alt=""
                objectFit="contain"
                w="full"
                h="full"
              />
            </Box>
          </Flex>
          <Stack gridColumn={{ base: '1', md: '2 / span 3' }} spacing={4}>
            <Header
              title={props.realtor.name}
              subtitle={`${props.realtor.contactInfo.phone.replace(
                /^(\d{3})(\d{3})(\d{4}).*/,
                '($1) $2-$3'
              )} | ${props.realtor.contactInfo.email}`}
            />
            <Text lineHeight={1.5}>{props.realtor.bio}</Text>
            <Flex gap={4}>
              <SocialLink
                href={props.realtor.contactInfo.socialMedia?.linkedin}
                icon={FaLinkedinIn}
                ariaLabel="LinkedIn link"
              />
              <SocialLink
                href={props.realtor.contactInfo.socialMedia?.facebook}
                icon={FaFacebook}
                ariaLabel="Facebook link"
              />
              <SocialLink
                href={props.realtor.contactInfo.socialMedia?.twitter}
                icon={FaTwitter}
                ariaLabel="Twitter link"
              />
              <SocialLink
                href={props.realtor.contactInfo.socialMedia?.instagram}
                icon={FaInstagram}
                ariaLabel="Instagram link"
              />
            </Flex>
          </Stack>
        </SimpleGrid>

        <Header
          title="Residential Properties"
          subtitle={`Homes and apartments listed by ${props.realtor.name}`}
        />
        <SimpleGrid columns={{ base: 1, lg: 2, '2xl': 4 }} gap={4}>
          {props.properties.map((property, index) => (
            <Box key={index}>
              <PropertyCard {...property} />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
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
