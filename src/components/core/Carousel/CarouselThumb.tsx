import { Box, Image } from '@chakra-ui/react';

const CarouselThumb = (props) => {
  return (
    <Box w={64} h={32}>
      <Box
        onClick={props.onClick}
        cursor='pointer'
        border={0}
        outline={0}
        w={64}
        h='full'
        bg='transparent'
        position='relative'
        overflow='hidden'
        style={{ touchAction: 'manipulation' }}
      >
        <Image
          position='absolute'
          opacity={props.selected ? 1 : 0.35}
          top={0}
          bottom={0}
          left='-10000%'
          right='-10000%'
          m='auto'
          minW='1000%'
          minH='1000%'
          maxW='none'
          transform='scale(0.1)'
          transition='opacity 0.2s'
          src={props.imgSrc}
          alt='A cool cat.'
        />
      </Box>
    </Box>
  );
};

export default CarouselThumb;
