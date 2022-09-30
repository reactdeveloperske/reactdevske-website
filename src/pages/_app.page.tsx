import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Banner from '../components/Banner';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
