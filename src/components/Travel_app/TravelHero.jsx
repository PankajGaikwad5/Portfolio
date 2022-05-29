import React from 'react';
import beach from './assets/beach.png';

const TravelHero = () => {
  return (
    <div className='w-full h-screen bg-black'>
      <img
        src={beach}
        alt='bg_image'
        className='w-full h-screen object-cover'
      />
    </div>
  );
};

export default TravelHero;
