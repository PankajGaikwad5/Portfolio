import React from 'react';

const About = () => {
  return (
    <div
      name='About'
      className='w-full h-screen bg-[#0a192f] text-gray-300 font-[Raleway]'
    >
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full max-w-[1000px] grid grid-cols-2'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='w-full max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Pankaj, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranginng from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at our fingertips
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
