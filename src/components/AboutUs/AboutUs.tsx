export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex flex-col max-w-2xl justify-center items-center self-center space-y-4 px-4"
    >
      <h2 className="text-3xl md:text-6xl tracking-wide md:font-light uppercase">
        About Us
      </h2>
      <p className="hidden md:inline-block text-4xl font-bold ">
        Empowering great talent
      </p>
      <p className="sm:text-sm md:text-xl tracking-wide text-center space-y-4">
        We bring together people who are passionate about React JS and{' '}
        <br className="hidden md:display" />
        it&apos;s ecosystem. We are a community of full-stack developers,
        frontend developers and so much more
      </p>
    </section>
  );
}
