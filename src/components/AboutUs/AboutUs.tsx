import { Fade } from 'react-awesome-reveal';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex flex-col max-w-2xl justify-center items-center self-center space-y-4 px-4"
    >
      <h2 className="text-3xl md:text-6xl tracking-wide md:font-light uppercase">
        About Us
      </h2>
      <p className="sm:text-sm md:text-xl tracking-wide text-center space-y-4">
        We are a vibrant community of developers passionate about React NextJs
        React Native and the powerful ecosystem. Our mission is to empower
        developers—from full-stack experts to frontend enthusiasts—to grow,
        collaborate, and create meaningful solutions. Join us to connect, learn,
        and contribute to the future of web development.
      </p>
    </section>
  );
}
