import Image from 'next/image';
import React from 'react';
import Navbar from '../Navbar';
import bgImage from '../../../public/images/hero-image.jpg';
import LinkButton from '../LinkButton/LinkButton';

export default function HeroHeader() {
  return (
    <div>
      <Image
        src={bgImage}
        alt=""
        objectFit="cover"
        layout="fill"
        className="-z-10 fixed top-0 opacity-[0.85] bg-[#333333]"
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
          <LinkButton
            className="flex justify-center items-center bg-[#EC0505] w-[307px] h-[61px] rounded-md text-white font-montserrat font-bold"
            href="https://bit.ly/joinreactdevske"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join ReactDevsKe
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
