import { useEffect, useState } from 'react';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

export default function HeroHeader() {
  const [screenWidth, setScreenWidth] = useState<number | null>(() =>
    typeof window !== 'undefined' ? window.innerWidth : null,
  );

  const breakpoint = 768;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!screenWidth) return null;

  return (
    <div id="hero" className="pt-2 bg-[#060b17]">
      {screenWidth < breakpoint ? <MobileHero /> : <DesktopHero />}
    </div>
  );
}
