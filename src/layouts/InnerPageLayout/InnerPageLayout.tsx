import { Box, Center, Image } from '@chakra-ui/react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Header } from '../../components/core/Header';
import { InnerPageLayoutProps } from './InnerPageLayout.types';

const InnerPageLayout = (props: InnerPageLayoutProps) => {
  return (
    <>
      <Box position='relative' w='full' h='sm' bg='chalkboard'>
        <ParallaxBanner
          layers={[
            {
              speed: -40,
              children: (
                <Image
                  src={props.imgSrc}
                  alt={props.imgAlt}
                  opacity={0.25}
                  objectFit='cover'
                  w='full'
                  h='full'
                />
              ),
            },
          ]}
        >
          <Parallax speed={-10} opacity={[3, 0]}>
            <Box
              mt={6}
              w='full'
              h='full'
              zIndex={1}
              px={{ base: 4, lg: 0 }}
              py={32}
            >
              <Box position='relative' top={-8}>
                <Header
                  center
                  light
                  title={props.title}
                  subtitle={props.subtitle}
                />
              </Box>
            </Box>
          </Parallax>
        </ParallaxBanner>
      </Box>

      <Box
        position='relative'
        zIndex={1}
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
        bg='background'
        pt={16}
      >
        {props.children}
      </Box>
    </>
  );
};

export default InnerPageLayout;
