import Head from "next/head";
import { Suspense } from "react";
import Banner from "../components/Banner";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Mission from "../components/Home/Mission";
import Founders from "../components/Home/Founders";
import Members from "../components/Home/Members";
import Events from "../components/Home/Events";
import Forum from "../components/Home/Forum";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";

import Image from "next/image";
import logo from "../../public/reactdevske.svg";

export default function Home({mockData}) {
  
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
        <About />
        <Mission />
        <Founders />
        <Members />
        <Suspense>
          <Events eventsData={mockData}/>
        </Suspense>        
        <Forum />
        <Contact />        
        <Footer />        
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const imageSrc = "https://picsum.photos/265/176";
  const mockData = [
    {title:"Weekly Standup", src:`${imageSrc}`, venue:"iHub", date:"2022-06-15"},
    {title:"2nd Bi-Annual Party", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"Junior Devs Mentorship", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Devs Networking", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Hackathon", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"Ask Me Anything", src:`${imageSrc}`, description:"React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system.",venue:"iHub",date:"2022-06-15"},
    {title:"Weekly Standup", src:`${imageSrc}`, venue:"iHub", date:"2022-06-15"},
    {title:"2nd Bi-Annual Party", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"Junior Devs Mentorship", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Devs Networking", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Hackathon", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"Ask Me Anything", src:`${imageSrc}`, description:"React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system.",venue:"iHub",date:"2022-06-15"},
    {title:"Junior Devs Mentorship", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Devs Networking", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Hackathon", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"Ask Me Anything", src:`${imageSrc}`, description:"React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system.",venue:"iHub",date:"2022-06-15"},
    {title:"Junior Devs Mentorship", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Devs Networking", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Hackathon", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"Ask Me Anything", src:`${imageSrc}`, description:"React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system.",venue:"iHub",date:"2022-06-15"},
    {title:"Junior Devs Mentorship", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Devs Networking", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"React Hackathon", src:`${imageSrc}`, description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {title:"Ask Me Anything", src:`${imageSrc}`, description:"React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system.",venue:"iHub",date:"2022-06-15"},
  ];
  return{
      props:{
          mockData
      }
  }
}
