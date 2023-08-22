import React from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { ABOUT, CONTACT, EVENTS, HOME } from '../../util/routeConstants';
import LinkButton from '../LinkButton/LinkButton';
import DropdownMenu from '../HeroHeader/DropdownMenu';

export default function Navbar() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsScrolledToTop(true);
    } else {
      setIsScrolledToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`transition-all duration-100 hidden md:block ${
          isScrolledToTop ? 'text-white' : 'text-black bg-white shadow-2xl'
        }`}
      >
        <header className="lg:pl-[49px] w-full bg-transparent">
          <nav className="nav py-4 pl-5 flex flex-col md:flex-row justify-around items-center">
            <div>
              <Link href={HOME}>
                <a>
                  <Logo size={60} />
                </a>
              </Link>
            </div>
            <ul className="font-montserrat text-base flex flex-row justify-between items-center md:space-x-[30px]">
              <li>
                <a href={ABOUT}>About us</a>
              </li>
              <li>
                <a href={EVENTS}>Events</a>
              </li>
              <li>
                <a href={CONTACT}>Contact</a>
              </li>
            </ul>
            <div>
              <LinkButton
                className="flex justify-center items-center bg-[#EC0505] w-[203px] h-[46px] rounded-md text-base text-white font-montserrat font-bold"
                href="https://bit.ly/joinreactdevske"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </LinkButton>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`px-6 py-2 flex justify-between md:hidden  ${
          isScrolledToTop ? '' : 'bg-white shadow-2xl'
        }`}
      >
        <Link href={HOME}>
          <a>
            <Logo size={60} />
          </a>
        </Link>
        <a
          target="_blank"
          href="https://github.com/reactdeveloperske/reactdevske-website"
          rel="noopener noreferrer"
          className="pt-[13px]"
        >
          <Image
            src="/img/github-logo.svg"
            alt="github svg"
            width={35}
            height={35}
          />
        </a>
        <DropdownMenu />
      </div>
    </>
  );
}
