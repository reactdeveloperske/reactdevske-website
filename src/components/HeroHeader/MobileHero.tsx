import React from 'react';
import LinkButton from '../LinkButton/LinkButton';

export default function MobileHero() {
  return (
    <div className="relative">
      <div>
        <h1 className="font-robotoMono font-medium text-4xl text-center mb-2">
          ReactDevsKe
        </h1>
        <div className="flex justify-center items-center mb-[34px]">
          <LinkButton
            href="https://bit.ly/joinreactdevske"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-[#12A04E] text-white w-44 rounded-md"
          >
            Join React.JS Kenya
          </LinkButton>
        </div>
        <p className="font-montserrat text-[#535353] text-xs text-center px-4">
          We are a tech community in Kenya focused on the React JS library and
          its ecosystem.
        </p>
      </div>
    </div>
  );
}
