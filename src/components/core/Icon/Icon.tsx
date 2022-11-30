import { Box } from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';
import React from 'react';

const Icon = (props: { children: IconType; size: number }) => {
  return (
    <Box>
      <svg width='0' height='0'>
        <linearGradient id='brand-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#4299E1' offset='0%' />
          <stop stopColor='#0BC5EA' offset='100%' />
        </linearGradient>
      </svg>
      {React.createElement(props.children, {
        size: props.size || 24,
        style: {
          padding: 2,
          strokeWidth: 24,
          fill: 'transparent',
          stroke: 'url(#brand-gradient)',
        },
      })}
    </Box>
  );
};

export default Icon;
