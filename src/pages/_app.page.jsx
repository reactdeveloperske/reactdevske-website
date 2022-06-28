import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
