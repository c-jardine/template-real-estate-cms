import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import { store } from '../src/redux/store';
import chakraTheme from '../src/styles/theme/theme';

const AppWrapper = (props) => {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <ChakraProvider theme={chakraTheme.lightTheme}>
          {props.children}
        </ChakraProvider>
      </ParallaxProvider>
    </Provider>
  );
};

export default AppWrapper;
