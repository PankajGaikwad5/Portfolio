import React from 'react';
import WorkImg from './WorkImg';
import workImg from '../assets/workImg.jpeg';
import travelWebsite from '../assets/travelWebsite.png';
import diceSite from '../assets/DICEsite.png';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
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
          <WorkImg
            image={travelWebsite}
            text='Travel website made with Reactjs and tailwindcss'
            url={'https://dynamic-kheer-3b036f.netlify.app/'}
          />
          <WorkImg
            image={diceSite}
            text='A site made with html and tailwndcss'
            url={'https://hilarious-granita-0afa29.netlify.app/'}
          />
          <WorkImg
            image={travelWebsite}
            text='Travel website made with Reactjs'
            url={'https://dynamic-kheer-3b036f.netlify.app/'}
          />
          <WorkImg
            image={diceSite}
            text='A site made with html and tailwndcss'
            url={'https://hilarious-granita-0afa29.netlify.app/'}
          />
          <WorkImg
            image={travelWebsite}
            text='Travel website made with Reactjs'
            url={'https://dynamic-kheer-3b036f.netlify.app/'}
          />
          <WorkImg
            image={diceSite}
            text='A site made with html and tailwndcss'
            url={'https://hilarious-granita-0afa29.netlify.app/'}
          />
        </div>
      </div>
    </div>
  );
};
// bg-[#0a192f] shadow-[#040c16]

export default Work;
