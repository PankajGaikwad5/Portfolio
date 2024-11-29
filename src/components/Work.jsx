import React from 'react';
import WorkImg from './WorkImg';
import workImg from '../assets/workImg.jpeg';
import travelWebsite from '../assets/travelWebsite.png';
import diceSite from '../assets/DICEsite.png';
import bootstrap from '../assets/bootstrap.png';
import bootstrap2 from '../assets/bootstrap2.png';
import unstarted from '../assets/unstarted.png';

const Work = () => {
  const works = [
    {
      id: 1,
      img: travelWebsite,
      url: 'https://dynamic-kheer-3b036f.netlify.app/',
    },
    {
      id: 2,
      img: diceSite,
      url: 'https://hilarious-granita-0afa29.netlify.app/',
    },
    {
      id: 3,
      img: bootstrap,
      url: 'https://thunderous-khapse-cb1f37.netlify.app/',
    },
    {
      id: 4,
      img: bootstrap2,
      url: 'https://deluxe-sprinkles-629beb.netlify.app/',
    },
    {
      id: 5,
      img: unstarted,
      url: 'https://glittery-platypus-943140.netlify.app/',
    },
  ];
  return (
    <div
      name='Work'
      className='w-full md:h-screen bg-[#0a192f] text-gray-300 font-[Raleway]'
    >
      <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center'>
        <div className='pb-8'>
          <p className='inline font-bold text-4xl border-b-4 border-pink-600'>
            Work
          </p>
          <p className='py-4'>// Please take a look at my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {works.map((item) => {
            const { id, img, url } = item;
            return <WorkImg key={id} image={img} url={url} />;
          })}
        </div>
      </div>
    </div>
  );
};
// bg-[#0a192f] shadow-[#040c16]

export default Work;
