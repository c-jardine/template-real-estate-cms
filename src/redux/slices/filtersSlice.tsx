import { createSlice } from '@reduxjs/toolkit';

export const FiltersEnum = Object.freeze({
  PROPERTY_TYPE: 'propertyType',
  LISTING_TYPE: 'listingType',
  MIN_PRICE: 'minPrice',
  MAX_PRICE: 'maxPrice',
  BEDROOMS: 'bedrooms',
  BATHROOMS: 'bathrooms',
});

export const initialFilters = {
  propertyType: 'residentialProperty',
  listingType: 'rental',
  minPrice: 0,
  maxPrice: 5000,
  bedrooms: 2,
  bathrooms: 1,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setFilter: (state, action) => {
      const { filter, value } = action.payload;
      state[filter] = value;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
