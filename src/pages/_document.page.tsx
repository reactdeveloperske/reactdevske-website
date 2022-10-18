import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" key="og-type" />
          <meta
            property="og:url"
            content="https://reactdevske.vercel.app/"
            key="og-url"
          />
          <meta
            property="og:title"
            content="Reactjs Developer Community in Kenya"
            key="og-title"
          />
          <meta
            property="og:description"
            content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system."
            key="og-desc"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/reactjs-devs-ke/image/upload/v1623830704/og_Image_banner_reactdevske_g3htri.png"
            key="og-img"
          />

          {/* <!-- Twitter --> */}
          <meta
            property="twitter:card"
            content="summary_large_image"
            key="ogtw-card"
          />
          <meta
            property="twitter:url"
            content="https://reactdevske.vercel.app/"
            key="ogtw-url"
          />
          <meta
            property="twitter:title"
            content="Reactjs Developer Community in Kenya"
            key="ogtw-title"
          />
          <meta
            property="twitter:description"
            content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system."
            key="ogtw-desc"
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/reactjs-devs-ke/image/upload/v1623830704/og_Image_banner_reactdevske_g3htri.png"
            key="ogtw-img"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
