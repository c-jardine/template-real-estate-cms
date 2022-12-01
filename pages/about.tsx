import { Box, chakra, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { RealtorCards, RealtorSplit } from '../src/components';
import { InnerPageLayout, InnerPageLayoutProps } from '../src/layouts';

const About: NextPage = () => {
  const props: InnerPageLayoutProps = {
    imgSrc:
      'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    imgAlt: '',
    title: 'About Us',
    subtitle: 'Velit ullamco ipsum velit excepteur',
  };

  return (
    <InnerPageLayout {...props}>
      <Stack
        position="relative"
        zIndex={1}
        w="100vw"
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
        spacing={28}
        alignItems="center"
        px={{ base: 4, xl: 0 }}
        pb={16}
      >
        <RealtorSplit />

        <Box mx="auto" maxW="4xl" w="full" h="lg">
          <Image
            src="https://images.unsplash.com/photo-1547866751-446296f133ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
            alt=""
            objectFit="cover"
            w="full"
            h="full"
          />
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 3 }}
          mx="auto"
          maxW="7xl"
          px={{ base: 4, xl: 0 }}
        >
          <chakra.h3 color="headerText" fontSize="4xl">
            Who we are
          </chakra.h3>
          <Stack gridColumn={{ base: 1, xl: '2 / span 2' }}>
            <Text>
              Consectetur id velit id anim enim laboris do quis laborum esse est
              magna ipsum. Dolor minim exercitation nostrud ex eiusmod et
              aliquip esse consequat amet et proident fugiat eu.
            </Text>
            <Text>
              Labore nostrud enim laboris exercitation enim fugiat veniam. Id
              cupidatat aute commodo id. Aute pariatur culpa ipsum dolor irure
              proident sunt magna magna. Id qui voluptate proident velit sunt.
              Lorem dolore do quis sint et sit.
            </Text>
          </Stack>
        </SimpleGrid>

        <RealtorCards />
      </Stack>
    </InnerPageLayout>
  );
};

export default About;
