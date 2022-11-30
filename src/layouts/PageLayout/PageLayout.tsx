import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <Box className={poppins.className} position='relative' bg='background'>
      <Stack spacing={28} alignItems='center'>
        {props.children}
      </Stack>
    </Box>
  );
};

export default PageLayout;
