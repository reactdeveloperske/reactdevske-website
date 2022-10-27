import React from 'react';
import Pillar from '../Pillar/Pillar';
import Image from 'next/image';

export default function MissionPillars() {
  return (
    <section className="flex flex-col w-full md:justify-center items-center bg-white md:bg-[#CEEDF4] py-12 space-y-10">
      <p className="md:uppercase tracking-wide font-bold md:font-light text-2xl md:text-5xl">
        Our Mission Pillars
      </p>
      <div className="hidden md:flex flex-col md:flex-row md:space-x-4 md:justify-between items-center w-4/5 lg:w-1/2 xl:2/5">
        <Pillar count="01" label="Mentorship" />
        <Image
          src={'/images/mentorship-image.png'}
          alt="Mentorship Image"
          width={360}
          height={270}
          className="rounded-lg"
        />
      </div>
      <div className="hidden md:flex flex-col md:flex-row-reverse space-x-4 justify-between items-center w-4/5 lg:w-1/2 xl:2/5">
        <Pillar count="02" label="Learning" />
        <Image
          src={'/images/learning-image.png'}
          alt="Learning Image"
          width={360}
          height={270}
          className="rounded-lg"
        />
      </div>
      <div className="hidden md:flex flex-col md:flex-row space-x-4 justify-between items-center w-4/5 lg:w-1/2 xl:2/5">
        <Pillar count="03" label="Community" />
        <Image
          src={'/images/community-image.png'}
          alt="Community Image"
          width={360}
          height={270}
          className="rounded-lg"
        />
      </div>
      <div className="flex md:hidden flex-col  space-y-2 w-full px-6">
        <div className="flex w-full">
        <Pillar count="01" label="Mentorship" />
        </div>
        <div className="flex justify-end">
          <Image
            src={'/images/mentorship-image.png'}
            alt="Mentorship Image"
            width={172}
            height={138}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex md:hidden flex-col  space-y-2 w-full px-6">
      <div className="flex w-full justify-end">
        <Pillar count="02" label="Learning" />
      </div>
        <div className="flex justify-start">
          <Image
            src={'/images/learning-image.png'}
            alt="Learning Image"
            width={172}
            height={138}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex md:hidden flex-col space-y-2 w-full px-6">
      <div className="flex w-full">
        <Pillar count="03" label="Community" />
        </div>
        <div className="flex justify-end">
          <Image
            src={'/images/community-image.png'}
            alt="Community Image"
            width={172}
            height={138}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
