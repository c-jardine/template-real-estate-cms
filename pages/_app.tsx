import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Footer, InformationBar, Navbar } from '../src/components';
import '../src/styles/globals.css';
import AppWrapper from './AppWrapper';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <AppWrapper>
      {!router.asPath.startsWith('/studio') ? (
        <>
          <InformationBar />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </AppWrapper>
  );
};

export default App;
