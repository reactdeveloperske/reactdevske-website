import Image from 'next/image';
import Pillar from '../Pillar/Pillar';

export default function MissionPillars() {
  return (
    <section className="flex flex-col w-full md:justify-center items-center bg-white md:bg-[#CEEDF4] py-12 space-y-10">
      <h2 className="md:uppercase font-bold md:font-light text-2xl md:text-5xl">
        Our Mission Pillars
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6">
        <div className="flex">
          <Pillar count="01" label="Mentorship" />
        </div>
        <div className="flex justify-end w-full md:w-2/5 lg:w-1/4">
          <div className="flex w-1/2 md:w-full">
            <div className="w-full overflow-hidden aspect-w-4 aspect-h-3">
              <Image
                src={'/images/mentorship-image.png'}
                alt="Mentorship Image"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6 md:space-x-reverse">
        <div className="flex justify-end">
          <Pillar count="02" label="Learning" />
        </div>
        <div className="flex md:justify-start w-full md:w-2/5 lg:w-1/4">
          <div className="flex w-1/2 md:w-full">
            <div className="w-full overflow-hidden aspect-w-4 aspect-h-3">
              <Image
                src={'/images/learning-image.png'}
                alt="Learning Image"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6">
        <div className="flex">
          <Pillar count="03" label="Community" />
        </div>
        <div className="flex justify-end w-full md:w-2/5 lg:w-1/4 ">
          <div className="flex w-1/2 md:w-full">
            <div className="w-full overflow-hidden aspect-w-4 aspect-h-3">
              <Image
                src={'/images/community-image.png'}
                alt="Community Image"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
