
import React from 'react';

const STATS = [
  { value: '133+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '10+', label: 'Awards Won' },
];

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col items-center justify-center gap-2 min-h-screen bg-secondary text-primary" aria-labelledby="about-heading">
      <h1 id="about-heading" className="text-3xl mb-2 sm:mb-8">About Us</h1>
      <p className="text-md mb-4 text-tertiary sm:p-0 w-full px-2 sm:px-2 sm:text-xl sm:w-2/3 text-center">
        At <b>AlgoMedia Agency</b>, we value innovation and measurable impact. We aim to build lasting partnerships by truly understanding our clients’ goals and delivering beyond expectations.
      </p>
      <div className="w-[95vw] sm:w-3/4 border flex items-center justify-center sm:mt-4" role="list" aria-label="Company stats">
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`w-full gap-1 p-1 py-3 sm:p-4${idx < STATS.length - 1 ? ' border-r' : ''} text-[#efefef] flex flex-col items-center justify-center bg-[#232323]`}
            role="listitem"
            aria-label={stat.label}
          >
            <h2 className="text-4xl font-semibold" aria-label={stat.value}>{stat.value}</h2>
            <p className="text-xs text-center sm:text-lg text-tertiary">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
