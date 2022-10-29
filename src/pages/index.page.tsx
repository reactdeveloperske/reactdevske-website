import Head from 'next/head';
import Events from '../components/Events/Events';
import AboutUs from '../components/about-us/about-us';
import ContactUs from '../components/ContactUs';
import MissionPillars from '../components/MissionPillars/MissionPillars';
import HeroHeader from '../components/HeroHeader';

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
        <HeroHeader />
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
