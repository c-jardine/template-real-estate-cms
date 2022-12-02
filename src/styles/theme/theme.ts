import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { generatePalette } from '../../lib/helpers/colors';

const colors = {
  brand: {
    ...generatePalette({ r: 252, g: 95, b: 8 }),
  },
  // brand: {
  //   ...generatePalette({ r: 4, g: 142, b: 231 }),
  // },
  chalkboard: '#18191d',
};

const textStyles = {
  h1: {
    fontSize: '5xl',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  h2: {
    fontSize: ['3xl', , '5xl'],
    fontWeight: 'bold',
  },
  gradient: {
    bgGradient: 'linear(to-br, purple.400, brand.400)',
    bgClip: 'text',
  },
  link: {
    transition: '200ms ease-in-out !important',
    _hover: { color: 'brand.500 !important' },
    _groupHover: { color: 'brand.500 !important' },
  },
};

const components = {
  Text: {
    baseStyle: {
      color: 'blackAlpha.600',
      fontWeight: 'light',
      letterSpacing: 'wide',
      lineHeight: 'taller',
    },
    variants: {
      feature: { color: 'chalkboard', fontWeight: 'bold' },
      details: { color: 'blackAlpha.600' },
      upperWide: { textTransform: 'uppercase', letterSpacing: 6 },
    },
  },
};

const darkTheme = extendTheme({
  textStyles,
  components,
  colors: {
    ...colors,
    background: '#18191d',
    cardBackground: '#141518',
    headerText: '#c9d1d9',
    bodyText: '#949a9f',
    subtleText: '#6e7275',
    lightButtonHover: 'rgba(0,0,0,0.64)',
    darkButtonHover: 'rgba(0,0,0,0.24)',
    socialBackground: '#141518',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  } as ThemeConfig,
});

const lightTheme = extendTheme({
  textStyles,
  components,
  colors: {
    ...colors,
    background: 'white',
    cardBackground: '#f5f5f5',
    headerText: '#18191d',
    bodyText: '#5f5f5f',
    subtleText: '#a3a3a3',
    lightButtonHover: 'rgba(255,255,255,0.64)',
    darkButtonHover: 'rgba(255,255,255,0.64)',
    socialBackground: '#141518',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  } as ThemeConfig,
});

const chakraTheme = { darkTheme, lightTheme };

export default chakraTheme;
