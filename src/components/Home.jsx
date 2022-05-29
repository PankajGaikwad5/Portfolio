import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] h-full flex flex-col px-8 mx-auto justify-center font-[Raleway]'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Pankaj Gaikwad
        </h1>
        <h2 className='text-4xl sm:text-7xl text-[#8892b0] font-bold'>
          I'm a Front End Developer
        </h2>
        <p className='text-[#8892b0] max-w-[700px] py-4'>
          I'm a font-end developer specializing in building (and occationally
          designing) exceptional digital experiences Currently. I'm focuseed on
          building responsive front-end web applications.
        </p>
        <div>
          <Link to={'Work'} smooth={true} duration={500}>
            <button className='flex items-center group border-2 my-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600 text-white'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
