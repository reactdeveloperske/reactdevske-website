import Link from 'next/link';
import type { EventData } from '../../types/index';
import DisplayRC from './DisplayRC';
import { Fade } from 'react-awesome-reveal';

const events: EventData[] = [
  {
    id: 1,
    title: 'RenderCon Kenya - React Conference',
    description:
      'RenderCon is the annual React and React Native tech event organized by React Devs KE. Join us for talks, workshops, and networking opportunities.',
    image_url: '/images/rendercon.png', // Replace with a locally stored image
    target: 'https://rendercon.org',
  },
  {
    id: 2,
    title: 'Physical Meetups',
    description: 'Physical meetups where we share, learn and network.',
    image_url: '/images/meetups.jpeg', // Replace with local image
    target:
      'https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events',
  },

  {
    id: 3,
    title: 'Joint Meetups',
    description: 'Meetups hosted in collaboration with other tech communities.',
    image_url: '/images/joints.png', // Replace with local image
    target:
      'https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events',
  },
  {
    id: 4,
    title: 'Online Standups',
    description:
      'Monthly open calls on Google Meet bringing together people from different communities.',
    image_url: '/images/standups.png', // Replace with local image
    target:
      'https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events',
  },
  {
    id: 5,
    title: 'Community Challenges',
    description:
      'We organize open source challenges to keep the community engaged.',
    image_url: '/images/challenges.jpg', // Replace with local image
    target: 'https://github.com/reactdeveloperske/community-coding-challenges',
  },
  {
    id: 6,
    title: 'OpenSource Projects',
    description:
      'We actively contribute to open source projects, fostering collaboration, learning, and innovation within the community.',
    image_url: '/images/opensource.png', // Replace with local image
    target: 'https://github.com/reactdeveloperske/community-coding-challenges',
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative flex flex-col items-center justify-center w-full pt-16 bg-[#023e8a] md:py-20 gap-y-2 md:gap-y-5"
    >
      <h2 className="pb-2 text-3xl text-white font-bold md:pb-10">
        Community Events
      </h2>
      <div className="grid grid-cols-1 gap-y-4  md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 md:grid-cols-2 px-4 md:px-10 lg:px-16 pt-8 md:pt-14 xl:pt-16">
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
      </div>
      <div className="flex items-start justify-center md:justify-end tracking-wide mt-4 px-4 md:px-10 lg:px-16 w-full text-white pb-10 md:pb-14 xl:pb-16">
        <Link
          href="https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events"
          target="_blank"
          className="bg-[#61dafb] text-black! px-6 w-full max-w-[350px] text-center py-3 rounded-md font-semibold text-lg hover:bg-[#48cae4] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          See More Events
        </Link>
      </div>
    </section>
  );
}
