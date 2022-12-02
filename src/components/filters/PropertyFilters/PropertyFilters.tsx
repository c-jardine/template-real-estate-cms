import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { client, filterPropertiesQuery } from '../../../lib/sanity';
import { FiltersEnum, setFilter } from '../../../redux/slices/filtersSlice';
import { RootState } from '../../../redux/store';
import { ResidentialFilters } from '../ResidentialFilters';

const PropertyFilters = (props: { loading; setLoading; setResults }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filtersReducer);

  const updateProperties = React.useCallback(async () => {
    props.setLoading(true);
    const data = await client(false).fetch(filterPropertiesQuery, filters);
    data && props.setResults(data);
    data && props.setLoading(false);
  }, [filters, props]);

  return (
    <Stack gridColumn="1" spacing={4} divider={<StackDivider />}>
      <Button
        onClick={updateProperties}
        disabled={props.loading}
        colorScheme="brand"
      >
        Update
      </Button>
      <Box>
        <Text fontSize="sm" textTransform="uppercase" fontWeight="semibold">
          Property type
        </Text>
        <Select
          placeholder="Select property type"
          value={filters.propertyType}
          onChange={(e) =>
            dispatch(
              setFilter({
                filter: FiltersEnum.PROPERTY_TYPE,
                value: e.target.value,
              })
            )
          }
        >
          <option value="residentialProperty">Residential</option>
          <option value="commercialProperty">Commercial</option>
          <option value="landProperty">Land</option>
        </Select>
      </Box>
      <Box>
        <Text fontSize="sm" textTransform="uppercase" fontWeight="semibold">
          Listing type
        </Text>
        <RadioGroup
          value={filters.listingType}
          onChange={(val) =>
            dispatch(
              setFilter({ filter: FiltersEnum.LISTING_TYPE, value: val })
            )
          }
        >
          <Stack>
            <Box
              onClick={() => {
                dispatch(
                  setFilter({ filter: FiltersEnum.MIN_PRICE, value: 0 })
                );
                dispatch(
                  setFilter({ filter: FiltersEnum.MAX_PRICE, value: 5000 })
                );
              }}
            >
              <Radio value="rental" colorScheme="brand">
                For rent
              </Radio>
            </Box>
            <Box
              onClick={() => {
                dispatch(
                  setFilter({ filter: FiltersEnum.MIN_PRICE, value: 0 })
                );
                dispatch(
                  setFilter({ filter: FiltersEnum.MAX_PRICE, value: 1000000 })
                );
              }}
            >
              <Radio value="sale" colorScheme="brand">
                For sale
              </Radio>
            </Box>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Flex
          justifyContent="space-between"
          fontSize="sm"
          textTransform="uppercase"
        >
          <Text fontWeight="semibold">Price</Text>
          <Text fontWeight="semibold" color="brand.500 !important">
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              currencyDisplay: 'symbol',
              notation: 'compact',
            }).format(filters.minPrice)}{' '}
            -{' '}
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              currencyDisplay: 'symbol',
              notation: 'compact',
            }).format(filters.maxPrice)}
          </Text>
        </Flex>
        <RangeSlider
          // eslint-disable-next-line jsx-a11y/aria-proptypes
          aria-label={['minimum price', 'maximum price']}
          min={0}
          max={filters.listingType === 'rental' ? 5000 : 1000000}
          step={filters.listingType === 'rental' ? 100 : 10000}
          value={[filters.minPrice, filters.maxPrice]}
          onChange={(val) => {
            dispatch(
              setFilter({ filter: FiltersEnum.MIN_PRICE, value: val[0] })
            );
            dispatch(
              setFilter({ filter: FiltersEnum.MAX_PRICE, value: val[1] })
            );
          }}
        >
          <RangeSliderTrack bg="brand.100">
            <RangeSliderFilledTrack bg="brand.500" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} bg="brand.500" />
          <RangeSliderThumb index={1} bg="brand.500" />
        </RangeSlider>
      </Box>
      <>
        {filters.propertyType === 'residentialProperty' && (
          <ResidentialFilters />
        )}
      </>
    </Stack>
  );
};

export default PropertyFilters;
