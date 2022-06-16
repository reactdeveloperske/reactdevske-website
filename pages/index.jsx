import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import logo from "../public/reactdevske.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>React Devs Kenya</title>
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

      <main className="pt-10">
        <h1 className="text-center text-3xl  text-white font-bold font-montserrat">
          React Developer Community Kenya 🇰🇪
        </h1>
        <p className="text-center text-xl text-white font-montserrat">
          A Community of Reactjs developers in Kenya 
        </p>
        <div className="flex flex-col mt-4 justify-center content-center">
          <Image
            src={logo}
            className="App-logo"
            alt="logo"
            width={300}
            height={300}
          />
          <p className="flex justify-center lg:mt-auto text-white pt-10">
            <span className="animate-bounce pr-3"> 🚧 </span> Under construction...  <span className="animate-spin ml-3"> ⚙️</span>
          </p>
        </div>
      </main>
    </div>
  );
}
