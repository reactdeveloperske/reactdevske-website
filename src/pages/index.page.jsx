import Head from 'next/head';
// import Banner from "../components/Banner";   // commented out due to lint error during lint configuration
import Image from 'next/image';
import logo from '../../public/reactdevske.svg';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reactjs Developer Community in Kenya</title>
        <meta
          name="description"
          content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system."
          key="desc"
        />
        <meta
          name="title"
          content="Reactjs Developer Community in Kenya"
          key="title"
        />
      </Head>

      <main className="">
        <h1 className="text-center pt-6 text-3xl text-white font-bold font-montserrat">
          React Developer Community Kenya
        </h1>
        <p className="text-center text-xl text-white font-montserrat">
          A Community of Reactjs developers in Kenya
        </p>
        <div className="flex flex-col justify-center content-center pt-5">
          <Image
            src={logo}
            className="App-logo"
            alt="logo"
            width={400}
            height={400}
          />
          <p className="flex justify-center text-white pt-10">
            🚧Under construction...
          </p>
          <a
              target="_blank"
              href="https://github.com/reactdeveloperske/reactdevske-website"
              rel="noopener noreferrer"
              className='pt-5 pb-5'
            >
              <button className="flex mx-auto bg-gray-300 border-0 py-[10px] px-[33px] focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
                Contribute on GitHub
              </button>
            </a>

        </div>
      </main>
    </div>
  );
}
