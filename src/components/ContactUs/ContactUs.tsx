import React, { useEffect, useState } from 'react';
import DesktopVersion from './DesktopVersion';
import MobileVersion from './MobileVersion';

export default function ContactUs() {
  const [screenWidth, setScreenWidth] = useState(1024);

  const breakpoint = 1024;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="contact-us">
      <h2 className="font-montserrat text-base uppercase w-fit mx-auto py-5">
        Contact us
      </h2>
      {screenWidth < breakpoint ? <MobileVersion /> : <DesktopVersion />}
    </section>
  );
}
