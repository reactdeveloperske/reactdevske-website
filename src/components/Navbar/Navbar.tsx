import React from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';

import { ABOUT, CONTACT, EVENTS, HOME } from '../../util/routeConstants';
import Button from '../Button/Button';

export default function Navbar() {
  return (
    <>
      <header className="lg:pl-[49px] w-full bg-transparent">
        <nav className="nav py-4 pl-5 flex flex-col md:flex-row justify-around items-center">
          <div>
            <Link href={HOME}>
              <a>
                <Logo size={60} />
              </a>
            </Link>
          </div>
          <div className="">
            <ul className="font-montserrat text-base text-white flex flex-row justify-between items-center md:space-x-[30px]">
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
          <div>
            <a
              target="_blank"
              href="https://bit.ly/joinreactdevske"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#EC0505] w-[203px] h-[46px] rounded-md text-base text-white font-montserrat font-bold">
                Join Community
              </Button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
