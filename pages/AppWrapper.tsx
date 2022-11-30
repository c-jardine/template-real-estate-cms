import { ChakraProvider } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import chakraTheme from '../src/styles/theme/theme';

const AppWrapper = (props) => {
  return (
    <ParallaxProvider>
      <ChakraProvider theme={chakraTheme.lightTheme}>
        {props.children}
      </ChakraProvider>
    </ParallaxProvider>
  );
};

export default AppWrapper;
