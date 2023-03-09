import '../styles/globals.css';
import Banner from '../components/Banner';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
