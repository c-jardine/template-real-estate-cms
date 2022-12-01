import {
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Header } from '../../core';

const RealtorSplit = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} maxW="6xl" w="full">
      <Stack spacing={8}>
        <Header title="Main Office" subtitle="Meet the managers" />
        <Text lineHeight={1.5}>
          Consequat officia eiusmod ut aliqua et consectetur. Magna ipsum aute
          sint nisi commodo ullamco.
        </Text>
        <Box>
          <Flex alignItems="center" gap={4}>
            <chakra.h3 fontSize="lg" fontWeight="semibold">
              Administrative Support
            </chakra.h3>
            <Box w={12} h={1} bg="brand.500" />
          </Flex>
          <Text fontSize="sm" lineHeight={1.5}>
            Mollit culpa est labore deserunt anim ipsum. In commodo amet elit
            aute culpa eu culpa Lorem. Nostrud nisi aliquip est velit ut
            consequat voluptate. Culpa velit nulla proident aliqua.
          </Text>
        </Box>

        <Box>
          <Flex alignItems="center" gap={4}>
            <chakra.h3 fontSize="lg" fontWeight="semibold">
              Market Analysis
            </chakra.h3>
            <Box w={12} h={1} bg="brand.500" />
          </Flex>
          <Text fontSize="sm" lineHeight={1.5}>
            Qui culpa consectetur veniam eu eiusmod dolore aliqua dolore fugiat
            minim consectetur amet. Ea quis voluptate magna anim nulla irure
            anim cillum.
          </Text>
        </Box>

        <Box>
          <Flex alignItems="center" gap={4}>
            <chakra.h3 fontSize="lg" fontWeight="semibold">
              Social Media Marketing
            </chakra.h3>
            <Box w={12} h={1} bg="brand.500" />
          </Flex>
          <Text fontSize="sm" lineHeight={1.5}>
            Lorem sint elit ad culpa ut adipisicing veniam officia eiusmod nulla
            ipsum commodo deserunt reprehenderit. Ullamco ad officia in velit
            voluptate amet. Mollit est laborum cillum anim non culpa aute esse
            id.
          </Text>
        </Box>
      </Stack>
      <Flex flexDirection="column" alignItems="space-around">
        <Image
          src="/women.png"
          alt=""
          objectFit="contain"
          w="full"
          h="full"
          maxH="md"
        />
        <Flex
          bg="chalkboard"
          flexDirection="column"
          alignItems="center"
          p={4}
          rounded="xl"
          mt={-0.5}
        >
          <Text fontSize="2xl" color="white !important" fontWeight="semibold">
            Destini Butler <chakra.span color="brand.500">&</chakra.span> Kelly
            Smith
          </Text>
          <Text mt={-2}>Secretaries, Realtors</Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};
export default RealtorSplit;
