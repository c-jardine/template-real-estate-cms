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
import { client, filterPropertiesQuery } from '../../../../lib/sanity';
import { initialFilters } from '../../../../pages/property';
import { ResidentialFilters } from '../ResidentialFilters';

const PropertyFilters = (props: { loading; setLoading; setProperties }) => {
  const [filters, setFilters] = React.useState(initialFilters);

  const updateProperties = React.useCallback(async () => {
    props.setLoading(true);
    const data = await client.fetch(filterPropertiesQuery, filters);
    data && props.setProperties(data);
    data && props.setLoading(false);
  }, [filters, props]);

  return (
    <Stack gridColumn='1' spacing={4} divider={<StackDivider />}>
      <Button
        onClick={updateProperties}
        disabled={props.loading}
        colorScheme='brand'
      >
        Update
      </Button>
      <Box>
        <Text fontSize='sm' textTransform='uppercase' fontWeight='semibold'>
          Property type
        </Text>
        <Select
          placeholder='Select property type'
          value={filters.propertyType}
          onChange={(e) =>
            setFilters({ ...filters, propertyType: e.target.value })
          }
        >
          <option value='residentialProperty'>Residential</option>
          <option value='commercialProperty'>Commercial</option>
          <option value='landProperty'>Land</option>
        </Select>
      </Box>
      <Box>
        <Text fontSize='sm' textTransform='uppercase' fontWeight='semibold'>
          Listing type
        </Text>
        <RadioGroup
          value={filters.listingType}
          onChange={(val) => setFilters({ ...filters, listingType: val })}
        >
          <Stack>
            <Box
              onClick={() =>
                setFilters({ ...filters, minPrice: 0, maxPrice: 5000 })
              }
            >
              <Radio value='rental' colorScheme='brand'>
                For rent
              </Radio>
            </Box>
            <Box
              onClick={() =>
                setFilters({ ...filters, minPrice: 0, maxPrice: 1000000 })
              }
            >
              <Radio value='sale' colorScheme='brand'>
                For sale
              </Radio>
            </Box>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Flex
          justifyContent='space-between'
          fontSize='sm'
          textTransform='uppercase'
        >
          <Text fontWeight='semibold'>Price</Text>
          <Text fontWeight='semibold' color='brand.500 !important'>
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
          onChange={(val) =>
            setFilters({ ...filters, minPrice: val[0], maxPrice: val[1] })
          }
        >
          <RangeSliderTrack bg='brand.100'>
            <RangeSliderFilledTrack bg='brand.500' />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} bg='brand.500' />
          <RangeSliderThumb index={1} bg='brand.500' />
        </RangeSlider>
      </Box>
      <>
        {filters.propertyType === 'residentialProperty' && (
          <ResidentialFilters filters={filters} setFilters={setFilters} />
        )}
      </>
    </Stack>
  );
};

export default PropertyFilters;
