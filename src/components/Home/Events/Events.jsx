import { useState } from 'react';
import EventsCard from '../EventsCard';

const eventsPerView = 6;

const Events = ({eventsData}) => {
  const [next, setNext] = useState(eventsPerView);

  const seeMore = () => {
    setNext(next + eventsPerView);
  };

  return (
    <div>
        <div className='mt-[64px]'>
          <h5 className='font-montserrat text-h5 text-text-gray text-center'>EVENTS</h5>
          <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Upcoming Community Events</h2>
        </div>

        <div className='bg-green'>
          <div className='flex flex-col align-center py-[48px] mx-[184px]'>
            <div className='grid gap-x-20 gap-y-14 grid-cols-3'>
              {
                eventsData?.slice(0, next)?.map(
                  (event, index) => (
                    <EventsCard
                      key={index}
                      src={event.src} 
                      title={event.title}
                      venue={event.venue}
                      date={event.date}
                    />
                  )
                )
              }
            </div>

            { next < eventsData?.length &&
              (<div className='text-right my-[48px]'>
                <input 
                  type="button" 
                  value="See more"
                  onClick={seeMore} 
                  className='cursor-pointer font-montserrat text-h4 text-white font-bold'
                />
              </div>)
            }
          </div>
        </div>
    </div>
  )
}

export default Events;