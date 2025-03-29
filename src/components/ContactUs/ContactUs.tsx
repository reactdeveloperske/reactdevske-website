import React, { useEffect, useState } from 'react';
import DesktopVersion from './DesktopVersion';
import MobileVersion from './MobileVersion';
import Footer from './Footer';

export default function ContactUs() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const breakpoint = 1024;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!screenWidth) return null;

  return (
    <section id="contact-us" className="bg-[#0096c7] pb-0">
      <h2 className="font-montserrat text-lg uppercase w-fit mx-auto pt-5 font-semibold">
        Contact us
      </h2>
      <DesktopVersion />
      <Footer/>
    </section>
  );
}
