import {
  Box,
  chakra,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaTag } from '@react-icons/all-files/fa/FaTag';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { googleMapsLinkBuilder } from '../../../../lib/helpers';
import { urlFor } from '../../../../lib/sanity';
import { Property, PropertyProps } from '../../../types';
import ResidentialPropertyCardBanner from './propertyTypes/ResidentialPropertyCardDetails';

const PropertyCard = (props: PropertyProps) => {
  return (
    <Stack justifyContent="center" textAlign="center" spacing={4}>
      <Box
        as={Link}
        href={`/property/${props._id}`}
        role="group"
        position="relative"
        h={64}
        rounded="xl"
        overflow="hidden"
      >
        <Image
          src={
            props.listing.gallery[0]
              ? urlFor(props.listing.gallery[0]).url()
              : 'https://via.placeholder.com/256x512?text=NO+IMAGE+PROVIDED'
          }
          alt=""
          // alt={props.imgAlt}
          h={64}
          w="full"
          rounded="xl"
          objectFit="cover"
          transition="200ms ease-in-out"
          _groupHover={{ transform: 'scale(1.1)' }}
        />
        <SimpleGrid
          columns={3}
          placeItems="center"
          position="absolute"
          roundedBottom="xl"
          overflow="hidden"
          bottom={0}
          w="full"
          px={4}
          py={2}
          bg="rgba(0,0,0,0.8)"
        >
          {props._type === Property.RESIDENTIAL && (
            <ResidentialPropertyCardBanner {...props} />
          )}
        </SimpleGrid>
      </Box>

      <Box position="relative" px={2}>
        <Stack alignItems="flex-start">
          <Text textAlign="left" fontWeight="bold" letterSpacing="wider">
            <chakra.span>
              ${Intl.NumberFormat().format(props.listing.price.amount)}
            </chakra.span>{' '}
            <chakra.span color="brand.500">
              {props.listing.price.frequency}
            </chakra.span>
          </Text>
          <chakra.h3
            as={Link}
            href={`/property/${props._id}`}
            transition="200ms ease-in-out"
            _hover={{ color: 'brand.500' }}
            color="headerText"
            fontSize="lg"
            letterSpacing="wider"
            textAlign="left"
            fontWeight="bold"
          >
            {props.cardPreview.title}
          </chakra.h3>

          <Text textAlign="left" fontSize="xs" lineHeight="short">
            {props.cardPreview.summary}
          </Text>
          <SimpleGrid templateColumns="auto 1fr" gap={2}>
            <Icon
              as={FaMapMarkerAlt}
              w={3}
              h={3}
              color="brand.500"
              style={{ marginTop: 1 }}
            />
            <Text
              as={Link}
              href={googleMapsLinkBuilder(props.listing.address)}
              target="_blank"
              rel="noreferrer"
              w="full"
              transition="200ms ease-in-out"
              _hover={{ color: 'brand.500' }}
              textAlign="left"
              fontSize="xs"
              lineHeight="short"
            >
              <chakra.span>{props.listing.address.street} | </chakra.span>
              <chakra.span>
                {props.listing.address.city}, {props.listing.address.state}{' '}
                {props.listing.address.zip}
              </chakra.span>
            </Text>
          </SimpleGrid>
          <SimpleGrid templateColumns="auto 1fr" gap={2}>
            <Icon
              as={FaTag}
              w={3}
              h={3}
              color="brand.500"
              style={{ marginTop: 1 }}
            />
            <Text
              as={Link}
              href="#"
              w="fit-content"
              transition="200ms ease-in-out"
              _hover={{ color: 'brand.500' }}
              textAlign="left"
              fontSize="xs"
              lineHeight="short"
            >
              {props.features.type}
            </Text>
          </SimpleGrid>
          <SimpleGrid templateColumns="auto 1fr" gap={2}>
            <Icon
              as={FaUser}
              w={3}
              h={3}
              color="brand.500"
              style={{ marginTop: 1 }}
            />
            <Text
              as={Link}
              href={`/agent/${props.listing.realtor?.slug?.current}`}
              w="fit-content"
              transition="200ms ease-in-out"
              _hover={{ color: 'brand.500' }}
              textAlign="left"
              fontSize="xs"
              lineHeight="short"
            >
              {props.listing.realtor?.name}
            </Text>
          </SimpleGrid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default PropertyCard;
