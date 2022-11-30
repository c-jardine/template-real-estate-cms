import { Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/react';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { urlFor } from '../../../../lib/sanity';
import {
  RealtorCardProps,
  RealtorCardSocialLinkProps,
} from './RealtorCard.types';

const SocialLink = (props: RealtorCardSocialLinkProps) => {
  return (
    <Link as={Flex} role='group'>
      <Icon
        aria-label={props.ariaLabel}
        as={props.icon}
        color='white'
        transition='200ms ease-in-out'
        _groupHover={{ color: 'brand.500' }}
      />
    </Link>
  );
};

const RealtorCard = (props: RealtorCardProps) => {
  return (
    <Box>
      <Box w='xs' h='xs' overflow='hidden'>
        <Image
          src={urlFor(props.image).url()}
          alt=''
          objectFit='contain'
          w='full'
          maxH='md'
        />
      </Box>
      <Box h={1} w='full' bg='brand.500' mx='auto' shadow='dark-lg' />
      <Box px={8}>
        <Flex
          w='full'
          bg='headerText'
          p={3}
          justifyContent='center'
          gap={8}
          roundedBottom='xl'
        >
          <SocialLink
            ariaLabel={`View ${props.name}'s LinkedIn profile`}
            icon={FaLinkedinIn}
            href={props.socialLinks?.linkedin || '#'}
          />
          <SocialLink
            ariaLabel={`Send ${props.name} an email`}
            icon={FaEnvelope}
            href={props.socialLinks?.email || '#'}
          />
          <SocialLink
            ariaLabel={`View ${props.name}'s Facebook profile`}
            icon={FaFacebook}
            href={props.socialLinks?.facebook || '#'}
          />
          <SocialLink
            ariaLabel={`View ${props.name}'s Twitter profile`}
            icon={FaTwitter}
            href={props.socialLinks?.twitter || '#'}
          />
        </Flex>
      </Box>
      <Box rounded='xl' overflow='hidden'>
        <Text
          mt={2}
          color='headerText !important'
          textAlign='center'
          textTransform='uppercase'
          letterSpacing='wider'
          fontWeight='light'
        >
          {props.name}
        </Text>
      </Box>
    </Box>
  );
};

export default RealtorCard;
