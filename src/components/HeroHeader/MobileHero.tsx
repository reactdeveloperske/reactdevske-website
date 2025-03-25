
import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import backgroundImage from '/public/images/hero-image.jpg'; // Add your background image here

export default function MobileHero() {
  return (
    <div
      className="relative bg-black bg-cover bg-center text-white mt-0"
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}
    >
      
      <div className="bg-black bg-opacity-50 p-6 rounded-md"> {/* Adds opacity to make text more legible */}
        <h1 className="font-robotoMono font-medium text-2xl text-center mb-2 text-white">
          React Developer Community Kenya 
        </h1>
        <div className="flex justify-center items-center mb-[34px]">
          <LinkButton
            href="https://bit.ly/joinreactdevske"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-[#12A04E] text-white w-44 rounded-md"
          >
            Join ReactJS Kenya
          </LinkButton>
        </div>
        <p className="font-montserrat text-white text-sm text-center px-4 mb-[50px]">
          We are a tech community in Kenya focused on the React JS library and
          its ecosystem.
        </p>
      </div>
    </div>
  );
}
