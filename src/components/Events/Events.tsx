import Link from 'next/link';
import type { EventData } from '../../types/index';
import DisplayRC from './DisplayRC';
import {Fade} from "react-awesome-reveal"

const events: EventData[] = [
  {
    id: 1,
    title: 'Physical Meetups',
    description: 'Physical meetups where we share, learn and network.',
    image_url: '/images/physical_meetup.jpg',
    target:
      'https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events',
  },
  {
    id: 2,
    title: 'Weekly Online Standups',
    description:
      'Weekly open calls in the community’s Telegram group discussing industry-related topics.',
    image_url: '/images/weekly_standups.jpg',
    target: 'https://bit.ly/joinreactdevske',
  },
  {
    id: 3,
    title: 'Community Power Sessions',
    description:
      'Community members meet and share technical concepts with other members of the community.',
    image_url: '/images/community_sessions.jpg',
    target: 'https://www.youtube.com/channel/UC9_eVcPBk4T-DcZLHpQfy4w/videos',
  },
  {
    id: 4,
    title: 'Joint Meetups',
    description: 'Meetups hosted in collaboration with other tech communities.',
    image_url: 'https://bit.ly/placeholder-img',
    target:
      'https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events',
  },
  {
    id: 5,
    title: 'Monthly Online Standups',
    description:
      'Monthly open calls on Google Meet  bringing together people from different communities.',
    image_url: '/images/physical_meetup.jpg',
    target:
      'https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events',
  },
  {
    id: 6,
    title: 'Community Challenges',
    description:
      'We organize open source challenges to keep the community engaged.',
    image_url: '/images/physical_meetup.jpg',
    target: 'https://github.com/reactdeveloperske/community-coding-challenges',
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative flex flex-col items-center justify-center w-full py-16 bg-white md:py-20 gap-y-2 md:gap-y-5"
    >
      <Fade direction='down'>
      <h2 className="flex text-2xl  border-b-2 border-slate-400 items-center justify-center font-light tracking-wide">
        Events
      </h2>
      <h2 className="pb-2 text-2xl font-bold md:pb-10">Community Events</h2>
      </Fade>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8 md:grid-cols-2 bg-[#09AFC6] px-4 md:px-10 lg:px-16 py-8 md:py-14 xl:py-16">
        {events.map((event) => (
          <DisplayRC
            key={event.id}
            id={event.id}
            title={event.title}
            image_url={event.image_url}
            description={event.description}
            target={event.target}
          />
        ))}

        <div className="flex items-center justify-center pt-1 tracking-wide text-white md:pt-0 md:text-right md:absolute md:bottom-24 md:right-10 2xl:bottom-36 lg:right-16 hover:tracking-widest hover:transition-all hover:duration-500 hover:underline">
          <Link href="https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events">
            <a target="_blank">See More</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
