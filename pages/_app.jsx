import Navbar from "../components/Navbar.jsx";
import "../styles/globals.css";
import Banner from "../components/Banner.jsx";

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
