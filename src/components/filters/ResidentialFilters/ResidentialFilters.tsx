import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

const ResidentialFilters = (props) => {
  return (
    <Stack spacing={4} divider={<StackDivider />}>
      <Box>
        <Flex
          justifyContent='space-between'
          fontSize='sm'
          textTransform='uppercase'
        >
          <Text fontWeight='semibold'>Bedrooms</Text>
          <Text fontWeight='semibold' color='brand.500 !important'>
            {props.filters.bedrooms}+
          </Text>
        </Flex>
        <Slider
          aria-label='number of bedrooms'
          min={0}
          max={10}
          step={1}
          value={props.filters.bedrooms}
          onChange={(val) =>
            props.setFilters({ ...props.filters, bedrooms: val })
          }
        >
          <SliderTrack bg='brand.100'>
            <SliderFilledTrack bg='brand.500' />
          </SliderTrack>
          <SliderThumb bg='brand.500' />
        </Slider>
      </Box>
      <Box>
        <Flex
          justifyContent='space-between'
          fontSize='sm'
          textTransform='uppercase'
        >
          <Text fontWeight='semibold'>Bathrooms</Text>
          <Text fontWeight='semibold' color='brand.500 !important'>
            {props.filters.bathrooms}+
          </Text>
        </Flex>
        <Slider
          aria-label='number of bathrooms'
          min={0}
          max={10}
          step={1}
          value={props.filters.bathrooms}
          onChange={(val) =>
            props.setFilters({ ...props.filters, bathrooms: val })
          }
        >
          <SliderTrack bg='brand.100'>
            <SliderFilledTrack bg='brand.500' />
          </SliderTrack>
          <SliderThumb bg='brand.500' />
        </Slider>
      </Box>
    </Stack>
  );
};

export default ResidentialFilters;
