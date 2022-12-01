import {
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaBath } from '@react-icons/all-files/fa/FaBath';
import { FaBed } from '@react-icons/all-files/fa/FaBed';
import { FaCity } from '@react-icons/all-files/fa/FaCity';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { FaListUl } from '@react-icons/all-files/fa/FaListUl';
import { FaRulerCombined } from '@react-icons/all-files/fa/FaRulerCombined';
import { PropertyProps } from '../../../types';
import ResidentialPropertyCommunityTab from './ResidentialPropertyCommunityTab';
import ResidentialPropertyFeaturesTab from './ResidentialPropertyFeaturesTab';
import ResidentialPropertyOverviewTab from './ResidentialPropertyOverviewTab';

const ResidentialPropertyDetails = (props: PropertyProps) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 3 }}
        bg="chalkboard"
        placeItems={{ sm: 'center' }}
        gap={4}
        p={4}
      >
        <Flex alignItems="center" gap={4}>
          <VisuallyHidden>
            {props.listing.size.size} {props.listing.size.unit}
          </VisuallyHidden>
          <Icon as={FaRulerCombined} w={6} h={6} color="white" />
          <Text
            fontSize="sm"
            color="subtleText !important"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {Intl.NumberFormat().format(props.listing.size.size)}{' '}
            <chakra.span color="brand.500" fontSize="xs">
              {props.listing.size.unit}
            </chakra.span>
          </Text>
        </Flex>
        <Flex alignItems="center" gap={4}>
          <VisuallyHidden>{props.features.bedrooms} bedrooms</VisuallyHidden>
          <Icon as={FaBed} w={6} h={6} color="white" />
          <Text
            fontSize="sm"
            color="subtleText !important"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {props.features.bedrooms}
          </Text>
        </Flex>
        <Flex alignItems="center" gap={4}>
          <VisuallyHidden>
            {props.features.bathrooms.full} full baths,{' '}
            {props.features.bathrooms.half} half baths
          </VisuallyHidden>
          <Icon as={FaBath} w={6} h={6} color="white" />
          <Text
            lineHeight={1.5}
            fontSize="sm"
            color="subtleText !important"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {props.features.bathrooms.full} full{' '}
            <chakra.span fontWeight="black" color="brand.500" fontSize="lg">
              |
            </chakra.span>{' '}
            {props.features.bathrooms.half} half
          </Text>
        </Flex>
      </SimpleGrid>

      <Tabs isFitted isLazy>
        <TabList
          bg="white"
          position={{ base: 'relative', sm: 'sticky' }}
          top={0}
        >
          <Tab _selected={{ bg: 'brand.500', color: 'white' }}>
            <Flex py={2} gap={2} alignItems="center">
              <Icon as={FaEye} />
              <chakra.span
                display={{ base: 'none', sm: 'flex' }}
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wider"
                fontWeight="semibold"
              >
                Overview
              </chakra.span>
            </Flex>
          </Tab>

          <Tab _selected={{ bg: 'brand.500', color: 'white' }}>
            <Flex py={2} gap={2} alignItems="center">
              <Icon as={FaListUl} />
              <chakra.span
                display={{ base: 'none', sm: 'flex' }}
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wider"
                fontWeight="semibold"
              >
                Features
              </chakra.span>
            </Flex>
          </Tab>

          <Tab _selected={{ bg: 'brand.500', color: 'white' }}>
            <Flex py={2} gap={2} alignItems="center">
              <Icon as={FaCity} w={5} h={5} />
              <chakra.span
                display={{ base: 'none', sm: 'flex' }}
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wider"
                fontWeight="semibold"
              >
                Community
              </chakra.span>
            </Flex>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ResidentialPropertyOverviewTab {...props} />
          </TabPanel>
          <ResidentialPropertyFeaturesTab {...props} />
          <ResidentialPropertyCommunityTab {...props} />
        </TabPanels>
      </Tabs>
    </>
  );
};
export default ResidentialPropertyDetails;
