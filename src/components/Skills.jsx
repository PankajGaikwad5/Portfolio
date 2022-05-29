import React from 'react';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div
      name='Skills'
      className='bg-[#0a192f] text-gray-300 h-screen w-full font-[Raleway]'
    >
      <div className='w-full h-full max-w-[1000px] flex flex-col justify-center mx-auto p-4'>
        <div>
          <p className='inline text-4xl border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>
            // These are the technologies i've worked with.
          </p>
        </div>
        <div className='w-full text-center grid grid-cols-2 sm:grid-cols-4 gap-4 py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={html} alt='html_image' />
            <p className='py-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={css} alt='css_image' />
            <p className='py-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={js} alt='javascript_image' />
            <p className='py-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={react} alt='react_image' />
            <p className='py-4'>REACT</p>
          </div>
          <div className='hidden sm:flex'></div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={tailwind} alt='tailwind_image' />
            <p className='py-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={github} alt='github_image' />
            <p className='py-4'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
