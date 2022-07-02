import React from 'react';
import Image from 'next/image';

const EventsCard = (props) => {
  return (
    <div className='bg-white rounded p-[16px] w-[301px] h-[344px]'>
        <Image src={props.src} width={265} height={176}/>
        <h4 className='text-h4 font-bold font-montserrat mt-[40px]'>{props.title}</h4>
        <div className='flex justify-between'>
            <div>
                <p className='font-montserrat text-bdy-sm mt-[14px]'>Venue: {props.venue}</p>
                <p className='font-montserrat text-bdy-sm mt-[14px]'>Date: {props.date}</p>
            </div>
            <div className='flex flex-col justify-end'>
                <button className='bg-red rounded py-[10px] px-[37px] text-white text-bd-rg h-[40px]'> RSVP </button>
            </div>
        </div>
    </div>
  )
}

export default EventsCard