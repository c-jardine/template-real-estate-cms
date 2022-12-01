import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import BrandColumn from './BrandColumn';
import ContactColumn from './ContactColumn';
import NavigationColumn from './NavigationColumn';
import PropertiesColumn from './PropertiesColumn';

const Footer = () => {
  return (
    <Box w="100vw" bg="cardBackground">
      <Stack mx="auto" spacing={0} justify={'center'} align={'center'}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={0} w="full">
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            px={8}
            bg="chalkboard"
          >
            <BrandColumn />
          </Flex>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gridColumn={{ base: '1', lg: '2 / span 2' }}
            gap={8}
            p={8}
          >
            <ContactColumn />
            <NavigationColumn />
            <PropertiesColumn />
          </SimpleGrid>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Footer;
