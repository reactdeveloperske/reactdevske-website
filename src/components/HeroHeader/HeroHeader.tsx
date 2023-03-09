import React, { useEffect, useState } from 'react';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

export default function HeroHeader() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const breakpoint = 768;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!screenWidth) return null;

  return (
    <header id="hero" className="pt-2">
      {screenWidth < breakpoint ? <MobileHero /> : <DesktopHero />}
    </header>
  );
}
