import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';

import { ABOUT, CONTACT, EVENTS, HOME } from '../../util/routeConstants';
import LinkButton from '../LinkButton/LinkButton';
import DropdownMenu from './DropdownMenu';

export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const breakpoint = 768;

  useEffect(() => {
    // Defer the initial set to avoid synchronous setState inside the effect
    // which can cause cascading renders. Use requestAnimationFrame so the
    // update runs after the browser paints.
    const rafId = requestAnimationFrame(() =>
      setScreenWidth(window.innerWidth)
    );

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!screenWidth) return null;
  return (
    <header className="lg:pl-[49px] fixed top-0 backdrop-blur-md w-full bg-black text-white justify-between bg-opacity-50 z-10">
      <nav className="nav py-2 md:py-4  md:pl-5 flex flex-row justify-between md:justify-around px-4 items-center">
        <div className="">
          <Link href={HOME}>
            <Logo size={60} />
          </Link>
        </div>
        {screenWidth > breakpoint && (
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
        )}
        {screenWidth > breakpoint && (
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
        )}
        {screenWidth <= breakpoint && <DropdownMenu />}
      </nav>
    </header>
  );
}
