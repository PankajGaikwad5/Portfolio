import React from 'react';

const WorkImg = ({ image, url, text, code }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className='mx-auto shadow-lg shadow-[#040c16] h-[160px] group rounded-md container flex justify-center content-div items-center font-[Raleway]'
    >
      <div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
        {/* <span className='text-2xl font-bold text-white tracking-wider text-center'>
          {text}
        </span> */}
        <div className='pt-8 text-center mb-4'>
          <a href={url} target={'_blank'}>
            <button className='text-center text-lg px-4 py-3 m-2 font-bold text-gray-700 rounded-lg bg-white'>
              Demo
            </button>
          </a>
          {code && (
            <a href={code} target={'_blank'}>
              <button className='text-center text-lg px-4 py-3 m-2 font-bold text-gray-700 rounded-lg bg-white'>
                Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkImg;
