import { defineType } from 'sanity';

export default defineType({
  name: 'residentialPropertyFeatures',
  title: 'Property Features',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single-family', value: 'Single-family' },
          { title: 'Multi-family', value: 'Multi-family' },
          { title: 'Townhouse', value: 'Townhouse' },
          { title: 'Condominium', value: 'Condominium' },
        ],
      },
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'bathrooms',
    },
    {
      name: 'garage',
      title: 'Garage',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'None' },
          { title: 'Attached', value: 'Attached' },
          { title: 'Detached', value: 'Detached' },
        ],
      },
    },
    {
      name: 'driveway',
      title: 'Driveway',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'None' },
          { title: 'Paved', value: 'Paved' },
          { title: 'Gravel', value: 'Gravel' },
          { title: 'Dirt', value: 'Dirt' },
        ],
      },
    },
    {
      name: 'basement',
      title: 'Basement',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'None' },
          { title: 'Crawlspace', value: 'Crawlspace' },
          { title: 'Full', value: 'Full' },
          { title: 'Part', value: 'Part' },
          { title: 'Walkout', value: 'Walkout' },
          { title: 'Walkup', value: 'Walkup' },
        ],
      },
    },
    {
      name: 'attic',
      title: 'Attic',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Scuttle', value: 'Scuttle' },
          { title: 'Unfinished', value: 'Unfinished' },
          { title: 'Partially finished', value: 'Partially finished' },
          {
            title: 'Fully finished wall height',
            value: 'Fully finished wall height',
          },
          { title: 'Truss', value: 'Truss' },
        ],
      },
    },
    {
      name: 'coolingType',
      title: 'Cooling type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Central', value: 'Central' },
          { title: 'Evaporative', value: 'Evaporative' },
          { title: 'Geothermal', value: 'Geothermal' },
          { title: 'Refrigeration', value: 'Refrigeration' },
          { title: 'Solar', value: 'Solar' },
          { title: 'Wall', value: 'Wall' },
          { title: 'Other', value: 'Other' },
          { title: 'None', value: 'None' },
        ],
        layout: 'grid',
      },
    },
    {
      name: 'heatingType',
      title: 'Heating type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Baseboard', value: 'Baseboard' },
          { title: 'Forced air', value: 'Forced air' },
          { title: 'Geothermal', value: 'Geothermal' },
          { title: 'Heat pump', value: 'Heat pump' },
          { title: 'Radiant', value: 'Radiant' },
          { title: 'Stove', value: 'Stove' },
          { title: 'Wall', value: 'Wall' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'grid',
      },
    },
    {
      name: 'heatingFuel',
      title: 'Heating fuel',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Coal', value: 'Coal' },
          { title: 'Electric', value: 'Electric' },
          { title: 'Gas', value: 'Gas' },
          { title: 'Oil', value: 'Oil' },
          { title: 'Propane/Butane', value: 'Propane/Butane' },
          { title: 'Solar', value: 'Solar' },
          { title: 'Wood/Pellet', value: 'Wood/Pellet' },
          { title: 'Other', value: 'Other' },
          { title: 'None', value: 'None' },
        ],
        layout: 'grid',
      },
    },
  ],
});
