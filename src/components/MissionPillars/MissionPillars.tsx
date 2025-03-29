import Pillar from '../Pillar/Pillar';

export default function MissionPillars() {
  const pillars = [
    {
      count: '01',
      label: 'Mentorship',
      description:
        'Guiding the next generation of developers through professional mentorship and support.',
    },
    {
      count: '02',
      label: 'Learning',
      description:
        'Empowering developers with resources and knowledge to continually grow their skills.',
    },
    {
      count: '03',
      label: 'Community',
      description:
        'Building an inclusive, diverse, and supportive community of developers.',
    },
  ];

  return (
    <section className="flex flex-col w-full items-center bg-[#0077b6] py-8 md:py-12 space-y-8 md:space-y-12">
      <h2 className="uppercase font-bold text-2xl sm:text-3xl md:text-5xl tracking-wide text-center mb-6 md:mb-8 text-[#f6f7f8]">
        Our Mission Pillars
      </h2>
      {pillars.map((pillar, index) => (
        <div
          key={pillar.count}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center justify-between w-full sm:w-5/6 md:w-3/4 lg:w-2/3 px-4 md:px-0 space-y-6 md:space-y-0 md:space-x-8`}
        >
          <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
            <Pillar
              count={pillar.count}
              label={pillar.label}
              description={pillar.description}
            />
          </div>
          <div className="flex w-full md:w-1/2 justify-center md:justify-start">
            {/* <div
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl text-white shadow-lg ${
                index % 2 === 0 ? 'bg-[#c10437]' : 'bg-[#02763a]'
              }`}
            >
              {pillar.count}
            </div> */}
          </div>
        </div>
      ))}
    </section>
  );
}
