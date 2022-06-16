import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import logo from "../public/reactdevske.svg";
import pana from   '../public/pana.svg'
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

      <main className="main-cont">
        
        <div className="flex flex-col justify-center content-center">
            <Image
              src={pana}
              className="App-logo"
              alt="logo"
              width={400}
              height={400}
            />
        </div>

          <div className="text-center text-white font-montserrat">
              <h1 className=" text-3xl  font-bold ">
                  Website Under Development <br />
                </h1>
                <p> we've got something cooking ,we'll be online soon</p> 
                <br />
                <p className="text-xl">
                   Join our Community of Reactjs developers in Kenya.
                </p>
          </div>

          
            <a target="_blank" href="https://bit.ly/joinreactdevske" rel="noopener noreferrer" className="flex  justify-center content-center btn-cont m-5">
                <button className="text-green-500 font-semibold bg-white px-5 py-4 rounded hover:bg-green-500 hover:text-white">
                    Join Community
                  </button>
            </a>
          

      </main>
    </div>
  );
}
