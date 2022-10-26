import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';
import Navbar from '../Navbar';
import bgImage from '../../../public/images/hero-image.svg';

export default function HeroHeader() {
  return (
    <div id="hero" className="pt-2">
      <Image
        src={bgImage}
        alt=""
        objectFit="cover"
        layout="fill"
        className="-z-10 fixed top-0"
        priority
      />
      <div className="relative">
        <Navbar />
      </div>
      <div className="w-full flex flex-col items-center justify-center z-10">
        <h1 className="font-montserrat font-bold text-center text-white text-[40px] leading-10 w-[388px] mx-auto mt-20">
          React Developer Community Kenya
        </h1>
        <p className="font-montserrat text-white w-[570px] mx-auto text-center mt-5 mb-[45px]">
          We are a tech community in Kenya focused on the React JS library and
          its ecosystem.
        </p>
        <div className="flex items-center justify-center mb-44 relative">
          <a
            target="_blank"
            href="https://bit.ly/joinreactdevske"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#EC0505] w-[307px] h-[61px] rounded-md text-white font-montserrat font-bold">
              Join ReactDevsKe
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
