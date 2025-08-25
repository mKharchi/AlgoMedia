
import React from 'react';
import { community, marketing, website } from '../assets/assets';
import { communitySM, marketingSM, websiteSM } from '../assets/assets';

const SERVICES = [
  {
    id: 1,
    name: 'Web Development',
    description: 'We design and develop custom, responsive websites tailored to your brand and goals.',
    icon: website,
    iconSM: websiteSM,
    image: '/webdev.jpg',
    alt: 'Web development illustration',
  },
  {
    id: 2,
    name: 'Social Media Marketing',
    description: 'We help you grow your brand and reach the right audience through strategic campaigns on Facebook, Instagram, TikTok, and Google Ads.',
    icon: marketing,
    iconSM: marketingSM,
    image: '/smma.jpg',
    alt: 'Social media marketing illustration',
  },
  {
    id: 3,
    name: 'Community Management',
    description: 'Our service includes a content calendar with regular posting schedules and responding to comments and messages across platforms.',
    icon: community,
    iconSM: communitySM,
    image: '/comunity.jpg',
    alt: 'Community management illustration',
  },
];

const Services = () => {
  const [chosenService, setChosenService] = React.useState(SERVICES[0]);

  return (
    <section id="services" className="w-full flex flex-col items-center justify-center gap-2 min-h-screen bg-secondary text-primary" aria-labelledby="services-heading">
      <h1 id="services-heading" className="text-3xl mb-8">Our Services</h1>
      <div className="px-4 w-full sm:w-2/3 flex items-center justify-center gap-4" role="tablist" aria-label="Service selection">
        {SERVICES.map((service) => (
          <button
            key={service.id}
            className={`w-full border rounded-lg p-2 sm:p-4 flex sm:flex-col justify-center items-center gap-3 sm:gap-2 cursor-pointer transition-all duration-50 ease-in-out ${service.id === chosenService.id ? 'bg-primary text-secondary' : ''}`}
            onClick={() => setChosenService(service)}
            aria-selected={service.id === chosenService.id}
            aria-label={service.name}
            role="tab"
            tabIndex={0}
            type="button"
          >
            {service.icon && <span className="hidden sm:flex" aria-hidden="true">{service.icon}</span>}
            {service.iconSM && <span className="sm:hidden flex" aria-hidden="true">{service.iconSM}</span>}
            <span className="hidden sm:block mt-4  w-full text-center text-lg mx-4">{service.name}</span>
          </button>
        ))}
      </div>
      <div className="w-full sm:w-3/4 flex items-center justify-center gap-4 p-4 sm:mt-4">
        <div className="w-full h-64 sm:h-96 flex flex-col items-center justify-center gap-4 p-4 bg-primary text-secondary rounded-lg shadow-lg">
          <h2 className="text-xl  ">{chosenService.name}</h2>
          <p className="text-sm sm:text-md w-full sm:w-2/3 text-center text-secondary">{chosenService.description}</p>
        </div>
        <div className="w-2/3 h-64 sm:h-96 hidden sm:flex rounded-lg items-center justify-center">
          {chosenService.image ? (
            <img
              src={chosenService.image}
              alt={chosenService.alt}
              className="w-full h-full object-fit rounded-lg"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <p className="text-gray-500">No image available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
