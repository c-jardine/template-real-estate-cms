import type { AppProps } from 'next/app';
import { Footer, InformationBar, Navbar } from '../src/components';
import '../src/styles/globals.css';
import AppWrapper from './AppWrapper';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppWrapper>
      <InformationBar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AppWrapper>
  );
};

export default App;
