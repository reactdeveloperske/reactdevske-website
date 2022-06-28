import React from 'react';
import DisplayRC from '../../components/EventsDisplay';
import logo from '../../../public/reactdevske.svg';
import Head from 'next/head';

export const getStaticProps = async () => {
    const data=[{name:"Event 1",src:"https://bit.ly/placeholder-img",event:true,description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {name:"Event 2",src:"https://bit.ly/placeholder-img",event:true,description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {name:"Event 3",src:"https://bit.ly/placeholder-img",event:true,description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {name:"Event 4",src:"https://bit.ly/placeholder-img",event:true,description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {name:"Event 5",src:"https://bit.ly/placeholder-img",event:true,description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {name:"Event 6",src:"https://bit.ly/placeholder-img",event:true,description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},
    {name:"Reactjs Developer Community in Kenya",src:logo,event:false,description:"React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system.",venue:"iHub",date:"2022-06-15"},
    {name:"Reactjs Developer Community in Kenya",src:logo,event:false,description:"React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system.",venue:"iHub",date:"2022-06-15"},
    {name:"Event 7",src:"https://bit.ly/placeholder-img",event:true,description:"This is a description for event 1",venue:"iHub",date:"2022-06-15"},]
    return{
        props:{
            data
        }
    }
}

export default function Events({data}){
    return(
      <div>
        <Head>
        <title>Reactjs Developer Community in Kenya - Forum</title>
        </Head>
        <div className='bg-white flex flex-col w-full gap-y-5 px-16 py-6 justify-center items-center'>
            <h2 className='text-2xl font-bold'>Community Events</h2>
            <p className='text-lg'> We organise several events for the community.</p>
            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 md:grid-cols-2'>
              {data.map((event,index)=>(
                  <DisplayRC key={index} name={event.name} src={event.src} event={event.event} description={event.description} venue={event.venue} date={event.date}/>
              ))}
            </div>
        </div>
        </div>
    )
}