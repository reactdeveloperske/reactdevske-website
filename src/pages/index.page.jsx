import Head from "next/head";
import Banner from "../components/Banner";
import Hero from "../components/Home/Hero";
import Image from "next/image";
import logo from "../../public/reactdevske.svg";

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

      <main className="bg-white">
        <Hero />        
      </main>
    </div>
  );
}