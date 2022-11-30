import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import {
  Clients,
  HomeHero,
  PropertyCards,
  PropertyTypes,
  RealtorCards,
} from '../src/components';
import { PageLayout } from '../src/layouts';

const HomePage: NextPage = () => {
  return (
    <>
      <PageLayout>
        <HomeHero />
        <PropertyCards />
        <RealtorCards />
        <PropertyTypes />
        <Clients />
        <Box />
      </PageLayout>
    </>
  );
};

export default HomePage;
