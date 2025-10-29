import React from 'react';
import Navbar from '../Navbar';
import LinkButton from '../LinkButton/LinkButton';

export default function HeroHeader() {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url('/images/hero-image.jpg')`,
      }}
    >
      {/* Black translucent overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="font-montserrat font-bold text-white text-[40px] leading-tight max-w-[388px] mt-24">
          React Developer Community Kenya
        </h1>
        <p className="font-montserrat text-white max-w-[570px] mt-5 mb-[45px]">
          We are a tech community in Kenya focused on the React JS library and its ecosystem.
        </p>
        <LinkButton
          className="flex justify-center items-center bg-[#EC0505] w-[307px] h-[61px] rounded-md text-white font-montserrat font-bold hover:bg-[#d10404] transition-colors"
          href="https://bit.ly/joinreactdevske"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join ReactDevsKe
        </LinkButton>
      </div>
    </div>
  );
}
