import React from 'react'
import EventsCard from '../EventsCard';

const Events = () => {
  return (
    <div>
        <div className='mt-[64px]'>
          <h5 className='font-montserrat text-h5 text-text-gray text-center'>EVENTS</h5>
          <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Upcoming Community Events</h2>
        </div>

        <div className='bg-green'>
          <div className='flex flex-col align-center mx-[184px]'>
            <div className='text-right mt-[25px] mb-[48px]'>
              <h4 className='font-montserrat text-h4 text-white font-bold'>See more</h4>
            </div>
            <div className='grid gap-x-20 gap-y-14 grid-cols-3 mb-[80px]'>
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
              <EventsCard />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Events;