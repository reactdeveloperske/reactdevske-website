import Image from 'next/image';
import Pillar from '../Pillar/Pillar';
import { Fade } from 'react-awesome-reveal';

export default function MissionPillars() {
  return (
    <section className="flex flex-col w-full md:justify-center items-center bg-white md:bg-[#CEEDF4] py-12 space-y-10">
      <h2 className="md:uppercase  font-bold md:font-light text-2xl md:text-5xl">
        Our Mission Pillars
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6">
        <div className="flex">
          <Fade direction="left">
            <Pillar count="01" label="Mentorship" />
          </Fade>
        </div>
        <div className="flex justify-end w-full md:w-2/5 lg:w-1/4">
          <div className="flex w-1/2 md:w-full">
            <div className="w-full overflow-hidden aspect-w-4 aspect-h-3">
              <Fade direction="right">
                <Image
                  src={
                    'https://res.cloudinary.com/reactjs-devs-ke/image/upload/v1678532588/website-images/mentorship-image_tz0mor.jpg'
                  }
                  alt="Mentorship Image"
                  layout="fill"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6 md:space-x-reverse">
        <div className="flex justify-end">
          <Fade direction="right">
            <Pillar count="02" label="Learning" />
          </Fade>
        </div>
        <div className="flex md:justify-start w-full md:w-2/5 lg:w-1/4">
          <div className="flex w-1/2 md:w-full">
            <div className="w-full overflow-hidden aspect-w-4 aspect-h-3">
              <Fade direction="left">
                <Image
                  src={
                    'https://res.cloudinary.com/reactjs-devs-ke/image/upload/v1678532588/website-images/learning-image_eylqwm.jpg'
                  }
                  alt="Learning Image"
                  layout="fill"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6">
        <div className="flex">
          <Fade direction="left">
            <Pillar count="03" label="Community" />
          </Fade>
        </div>
        <div className="flex justify-end w-full md:w-2/5 lg:w-1/4 ">
          <div className="flex w-1/2 md:w-full">
            <div className="w-full overflow-hidden aspect-w-4 aspect-h-3">
              <Fade direction="right">
                <Image
                  src={
                    'https://res.cloudinary.com/reactjs-devs-ke/image/upload/v1678532588/website-images/community-image_pkeqwj.jpg'
                  }
                  alt="Community Image"
                  layout="fill"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
