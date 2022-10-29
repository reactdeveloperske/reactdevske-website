import Head from 'next/head';
import Image from 'next/image';
import logo from '../../public/reactdevske.svg';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs';
import Events from '../components/Events/Events';
import MissionPillars from '../components/MissionPillars/MissionPillars';

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
        <h1 className="pt-6 text-3xl font-bold text-center text-white font-montserrat">
          React Developer Community Kenya
        </h1>
        <p className="text-xl text-center text-white font-montserrat">
          A Community of Reactjs developers in Kenya
        </p>
        <div className="flex flex-col content-center justify-center pt-5">
          <Image
            src={logo}
            className="App-logo"
            alt="logo"
            width={400}
            height={400}
          />
          <p className="flex justify-center pt-10 text-white">
            🚧Under construction...
          </p>
          <a
            target="_blank"
            href="https://github.com/reactdeveloperske/reactdevske-website"
            rel="noopener noreferrer"
            className="pt-5 pb-5"
          >
            <button className="flex mx-auto bg-gray-300 border-0 py-[10px] px-[33px] focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
              Contribute on GitHub
            </button>
          </a>
        </div>
        <div className="flex flex-col py-12 bg-white">
          <AboutUs />
        </div>
        <MissionPillars />
        <Events />
        <ContactUs />
      </main>
    </div>
  );
}
