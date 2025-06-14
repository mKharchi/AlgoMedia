import React from 'react'
import { community, marketing, website } from '../assets/assets';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'We design and develop custom, responsive websites tailored to your brand and goals. From user-friendly interfaces to seamless performance, we build sites that engage visitors and drive results.',
      icon: website,
      image: '/webdev.jpg'
    },
    {
      id: 2,
      name: 'Social Media Marketing',
      description: 'We help you grow your brand and reach the right audience through strategic campaigns on Facebook, Instagram, TikTok, and Google Ads. From ad creation to performance tracking, we craft engaging content and targeted ads that drive real results and boost your online presence.',
      icon: marketing,
      image: '/smma.png'
    },
    {
      id: 3,
      name: 'Community Management',
      description: 'We manage your online presence with care and consistency. Our service includes a content calendar with regular posting schedules, engaging with your audience, and responding to comments and messages across platforms. We also apply basic SEO strategies to optimize captions and hashtags, helping your content reach a wider, more relevant audience. Our goal: to build a strong, active, and loyal community around your brand.',
      icon: community,
      image: '/comunity.jpg'
    }
  ];

  const [chosenService, setChosenService] = React.useState(services[0]);

  return (
    <div id='services' className='w-full flex flex-col items-center justify-center gap-2 min-h-screen bg-secondary text-primary'>
      <h1 className='text-3xl mb-8'>Our Services</h1>
      <div className='w-1/2 flex  items-center justify-center gap-4'>
        {services.map((service) => (
          <div
            key={service.id}
            className={`w-full p-4 flex flex-col items-center gap-2 cursor-pointer transition-all duration-50 ease-in-out  ${service.id === chosenService.id ? 'border-b-2 border-amber-50' : ''}`}
            onClick={() => setChosenService(service)}
          >

            {service.icon && (
              <div className='text-2xl mb-2'>
                {service.icon}
              </div>
            )}
            <p className='text-md text-primary'>{service.name}</p>
          </div>
        ))}
      </div>


      <div className='w-3/4 flex items-center justify-center gap-4 p-4 mt-4 '>
        <div className='w-full h-96 flex flex-col items-center justify-center gap-4 p-4 bg-primary text-secondary rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold'>{chosenService.name}</h2>
          <p className='text-md w-2/3 text-center text-secondary'>{chosenService.description}</p>

        </div>
        <div className='w-2/3 h-96  rounded-lg flex items-center justify-center'>
          {chosenService.image ? (
            <img src={chosenService.image} alt={chosenService.name} className='w-full h-full object-fit rounded-lg' />
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
