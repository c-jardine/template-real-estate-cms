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
import { useDispatch, useSelector } from 'react-redux';
import { FiltersEnum, setFilter } from '../../../redux/slices/filtersSlice';
import { RootState } from '../../../redux/store';

const ResidentialFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filtersReducer);

  return (
    <Stack spacing={4} divider={<StackDivider />}>
      <Box>
        <Flex
          justifyContent="space-between"
          fontSize="sm"
          textTransform="uppercase"
        >
          <Text fontWeight="semibold">Bedrooms</Text>
          <Text fontWeight="semibold" color="brand.500 !important">
            {filters.bedrooms}+
          </Text>
        </Flex>
        <Slider
          aria-label="number of bedrooms"
          min={0}
          max={10}
          step={1}
          value={filters.bedrooms}
          onChange={(val) =>
            dispatch(setFilter({ filter: FiltersEnum.BEDROOMS, value: val }))
          }
        >
          <SliderTrack bg="brand.100">
            <SliderFilledTrack bg="brand.500" />
          </SliderTrack>
          <SliderThumb bg="brand.500" />
        </Slider>
      </Box>
      <Box>
        <Flex
          justifyContent="space-between"
          fontSize="sm"
          textTransform="uppercase"
        >
          <Text fontWeight="semibold">Bathrooms</Text>
          <Text fontWeight="semibold" color="brand.500 !important">
            {filters.bathrooms}+
          </Text>
        </Flex>
        <Slider
          aria-label="number of bathrooms"
          min={0}
          max={10}
          step={1}
          value={filters.bathrooms}
          onChange={(val) =>
            dispatch(setFilter({ filter: FiltersEnum.BATHROOMS, value: val }))
          }
        >
          <SliderTrack bg="brand.100">
            <SliderFilledTrack bg="brand.500" />
          </SliderTrack>
          <SliderThumb bg="brand.500" />
        </Slider>
      </Box>
    </Stack>
  );
};

export default ResidentialFilters;
