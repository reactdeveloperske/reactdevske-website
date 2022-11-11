import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ABOUT, CONTACT, EVENTS } from '../../util/routeConstants';
import Logo from '../Logo';
import loveIcon from '../../../public/img/love-icon.svg';

export default function Footer() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const breakpoint = 768;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-[#CEEDF4] w-full md:pt-12 md:pb-[25px] py-4">
      <div className="lg:w-1/4 md:w-[35%] sm:w-[40%] w-[65%] mx-auto flex flex-col justify-center items-center">
        {screenWidth && (
          <div>
            <Logo size={screenWidth >= breakpoint ? 175 : 125} />
          </div>
        )}
        <div className="md:pt-5 md:pb-[70px] pb-14 pt-[18px] md:w-auto w-full">
          <ul className="font-montserrat md:text-base text-xs text-black flex flex-row justify-between items-center md:space-x-[30px]">
            <a href={ABOUT}>
              <li>About us</li>
            </a>
            <a href={EVENTS}>
              <li>Events</li>
            </a>
            <a href={CONTACT}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <p className="font-montserrat md:text-xs text-[8px]">
          Made with &nbsp;
          <span>
            <Image src={loveIcon} alt="" width={10} height={10} />
          </span>
          &nbsp; by ReactDevsKe
        </p>
      </div>
    </footer>
  );
}
