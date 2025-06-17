import React from 'react'
import { community, marketing, website } from '../assets/assets';
import { communitySM, marketingSM, websiteSM } from '../assets/assets';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'We design and develop custom, responsive websites tailored to your brand and goals.',
      icon: website,
      iconSM: websiteSM,
      image: '/webdev.jpg'
    },
    {
      id: 2,
      name: 'Social Media Marketing',
      description: 'We help you grow your brand and reach the right audience through strategic campaigns on Facebook, Instagram, TikTok, and Google Ads.',
      icon: marketing,
      iconSM: marketingSM,
      image: '/smma.jpg'
    },
    {
      id: 3,
      name: 'Community Management',
      description: 'Our service includes a content calendar with regular posting schedules and responding to comments and messages across platforms.',
      icon: community,
      iconSM: communitySM,
      image: '/comunity.jpg'
    }
  ];

  const [chosenService, setChosenService] = React.useState(services[0]);

  return (
    <div id='services' className='w-full flex flex-col items-center justify-center gap-2 min-h-screen bg-secondary text-primary'>
      <h1 className='text-3xl mb-8'>Our Services</h1>
      <div className='px-4 w-full sm:w-1/2 flex  items-center justify-center gap-4'>
        {services.map((service) => (
          <div
            key={service.id}
            className={`w-full border rounded-lg p-2  sm:p-4 flex sm:flex-col justify-center  items-center gap-3 sm:gap-2 cursor-pointer transition-all duration-50 ease-in-out  ${service.id === chosenService.id ? 'bg-primary text-secondary' : ''}`}
            onClick={() => setChosenService(service)}
          >

            {service.icon && (
              <div className='hidden sm:flex'>
                {service.icon}
              </div>
            )}
            {service.iconSM && (
              <div className='sm:hidden flex '>
                {service.iconSM}
              </div>
            )}
            

            <p className='hidden sm:block mt-4 font-bold w-full text-center text-lg '>{service.name}</p>
          </div>
        ))}
      </div>


      <div className='w-full sm:w-3/4 flex items-center justify-center gap-4 p-4 sm:mt-4 '>
        <div className='w-full h-64 sm:h-96 flex flex-col items-center justify-center gap-4 p-4 bg-primary text-secondary rounded-lg shadow-lg'>
          <h2 className='text-xl sm:text-2xl font-bold'>{chosenService.name}</h2>
          <p className='txet-sm sm:text-md w-full sm:w-2/3 text-center text-secondary'>{chosenService.description}</p>
        </div>
        <div className='w-2/3 h-64 sm:h-96 hidden sm:flex rounded-lg  items-center justify-center'>
          {chosenService.image ? (
            <img src={chosenService.image} alt={chosenService.name} className='w-full  h-full object-fit rounded-lg' />
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-gray-200 rounded-lg'>
              <p className='text-gray-500'>No image available</p>
            </div>
          )}
        </div>
      </div>


    </div>
  )
}

export default Services
