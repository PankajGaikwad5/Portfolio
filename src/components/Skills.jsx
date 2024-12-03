import React from 'react';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  const nextjs =
    'https://imgs.search.brave.com/bzbDhTvVzwVP35QveO92yOzT5XRn1LG-W9FNbaUaicA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Jl/c3RvZmpzL2Jlc3Rv/ZmpzL21hc3Rlci9h/cHBzL2Jlc3RvZmpz/LW5leHRqcy9wdWJs/aWMvbG9nb3MvbmV4/dGpzLnN2Zw';
  const ts =
    'https://imgs.search.brave.com/b1mza9u8ePJdo9VHfx00bmjzGwVI_b7cLPA1ONSjIL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL1R5cGVzY3Jp/cHRfbG9nb18yMDIw/LnN2Zw';
  const node =
    'https://imgs.search.brave.com/36GgIGJKgVJKeKc3oDO76d0mU9jlfM9IHPtfRqFEjwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3Mvbi8y/Mi9ub2RlanMuc3Zn';
  const nest =
    'https://imgs.search.brave.com/yP55AI3pLZMQLx---VTOdsn20i_x8ffQG14_jcmKxvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E4L05lc3RKUy5z/dmc';

  const mongo =
    'https://imgs.search.brave.com/sP5Qwk0VzQxr6ido4czY-uuR_9Bcsqt1hBSYSJronVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTW9u/Z29kYi1QTkctUGlj/dHVyZS5wbmc';
  const bootstrap =
    'https://imgs.search.brave.com/linDLuCrb1B71Jtl1QP-3vAdm7VNtPqEZWlf2RStp44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL0Jvb3RzdHJh/cF9sb2dvLnN2Zw';
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
            <img
              className='w-14 mx-auto'
              src={bootstrap}
              alt='tailwind_image'
            />
            <p className='py-4'>BOOTSTRAP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={tailwind} alt='tailwind_image' />
            <p className='py-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={js} alt='javascript_image' />
            <p className='py-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={ts} alt='react_image' />
            <p className='py-4'>TYPESCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={react} alt='react_image' />
            <p className='py-4'>REACTJS</p>
          </div>
          {/* <div className='hidden sm:flex'></div> */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={node} alt='tailwind_image' />
            <p className='py-4'>NODEJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={nextjs} alt='github_image' />
            <p className='py-4'>NEXTJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={nest} alt='github_image' />
            <p className='py-4'>NESTJS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-14 mx-auto' src={mongo} alt='tailwind_image' />
            <p className='py-4'>MONGODB</p>
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
