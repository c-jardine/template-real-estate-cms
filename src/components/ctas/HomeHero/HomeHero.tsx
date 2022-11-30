import { Box, chakra, Image, Stack, Text } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { SimpleGrid } from '@chakra-ui/react';
import { Button } from '../../core/Button';
import { ContactForm } from '../../core/ContactForm';

const HomeHero = () => {
  return (
    <>
      <Box position='relative' w='100vw' minH='calc(100vh - 4rem)'>
        <Box w='full' maxW='3840px' mx='auto' h='full' bg='black'>
          <Image
            objectFit='cover'
            src='/hero-bg.jpg'
            alt='Statue holding the scales of justice'
            overflow='hidden'
            w='full'
            h='calc(100vh - 4rem)'
          />
        </Box>

        <Box
          display={{ base: 'none', lg: 'block' }}
          position='relative'
          maxW='1920px'
          mx='auto'
        >
          <ContactForm />
        </Box>

        <Box
          position='absolute'
          maxW='3840px'
          w='full'
          left='50%'
          transform='translateX(-50%)'
          bottom={0}
        >
          <Box
            bg='chalkboard'
            w='full'
            h='full'
            position='absolute'
            opacity={0.95}
          />
          <SimpleGrid
            position='relative'
            columns={{ base: 1, lg: 2 }}
            gap={16}
            p={{ base: 4, md: 8, lg: 16 }}
            maxW='1920px'
            mx='auto'
          >
            <Box maxW={{ xl: '2xl', '2xl': '3xl' }} w='full' mx='auto'>
              <chakra.h1
                fontSize={['3xl', , '4xl']}
                letterSpacing='wide'
                lineHeight='shorter'
                textAlign='left'
                color='brand.500'
                fontWeight='semibold'
              >
                Properties in Toledo, OH and surrounding areas.
              </chakra.h1>
              <Text
                mt={2}
                fontSize={['sm', 'md']}
                color='subtleText !important'
                lineHeight='tall'
              >
                Est id aute cillum quis anim. Et consectetur amet nostrud tempor
                nulla id amet pariatur esse. Amet proident adipisicing ullamco
                pariatur velit sunt eu.
              </Text>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={{ base: 4, lg: 8 }}
                flexWrap='wrap'
                mt={8}
              >
                <Button ariaLabel='Go to the Get Started page'>
                  Lorem ipsum
                </Button>
                <Button ariaLabel='Go to the pricing page' variant='light'>
                  Dolor sumit
                </Button>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Box
        display={{ base: 'block', lg: 'none' }}
        position='relative'
        maxW='8xl'
        mx='auto'
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default HomeHero;
