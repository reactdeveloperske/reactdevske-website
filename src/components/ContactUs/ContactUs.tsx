import { useEffect, useState } from 'react';
import DesktopVersion from './DesktopVersion';
import Footer from './Footer';

export default function ContactUs() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

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
    <section id="contact-us" className="bg-[#0096c7] pb-0">
      <h2 className="font-montserrat text-lg uppercase w-fit mx-auto pt-5 font-semibold">
        Contact us
      </h2>
      <DesktopVersion />
      <Footer />
    </section>
  );
}
