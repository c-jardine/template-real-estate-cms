import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { FaChevronLeft } from '@react-icons/all-files/fa/FaChevronLeft';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { urlFor } from '../../../lib/sanity';

import CarouselThumb from './CarouselThumb';

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    loop: true,
  });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const scrollPrev = React.useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = React.useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  const onThumbClick = React.useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = React.useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());

    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  React.useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <Flex
      position="relative"
      h="full"
      flexDirection="column"
      gap={2}
      overflow="hidden"
    >
      <Flex ref={mainViewportRef} overflow="hidden" w="full" h="full">
        <Flex
          userSelect="none"
          style={{
            WebkitTouchCallout: 'none',
            KhtmlUserSelect: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {props.images.map((image: SanityImageSource, index: number) => (
            <Box key={index} minW="full" h="full">
              <Image
                src={urlFor(image).url()}
                alt=""
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex position="absolute" top={2} px={4} w="full" justifyContent="center">
        <Flex gap={1}>
          <IconButton
            aria-label="Next slide"
            as={FaChevronLeft}
            size="sm"
            w="32"
            rounded="none"
            p={2}
            bg="brand.500"
            color="white"
            transition="200ms ease-in-out"
            _hover={{ filter: 'brightness(120%)' }}
            _active={{ filter: 'brightness(90%)' }}
            onClick={scrollPrev}
          />
          <IconButton
            aria-label="Next slide"
            as={FaChevronRight}
            size="sm"
            w="32"
            rounded="none"
            p={2}
            bg="brand.500"
            color="white"
            transition="200ms ease-in-out"
            _hover={{ filter: 'brightness(120%)' }}
            _active={{ filter: 'brightness(90%)' }}
            onClick={scrollNext}
          />
        </Flex>
      </Flex>

      <Box>
        <Box ref={thumbViewportRef}>
          <Flex cursor="default" w="full" gap={2}>
            {props.images.map((image, index) => (
              <CarouselThumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={urlFor(image).url()}
                key={index}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Carousel;
