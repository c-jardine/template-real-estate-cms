import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo titleTemplate={`%s | Lorem Ipsum Blog`} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
