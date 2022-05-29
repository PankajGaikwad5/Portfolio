import React from 'react';

const Contact = () => {
  return (
    <div
      name='Contact'
      className='w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center p-4 font-[Raleway]'
    >
      <form
        action='https://getform.io/f/83fb213d-3986-409a-a78b-0b078c997b57'
        method='POST'
        className='w-full max-w-[600px] flex flex-col'
      >
        <div className='pb-4'>
          <p className='inline  text-4xl font-bold border-b-4 border-pink-600'>
            Contact
          </p>
          <p className='py-6'>
            // Submit the form below or shoot me a mail at
            gaikwadpankaj62@gmail.com
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2 text-black'
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
        <input
          className='bg-[#ccd6f6] p-2 text-black my-4'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <textarea
          className='bg-[#ccd6f6] h-[124px] md:h-40 p-2 text-black'
          name='message'
          id='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='px-4 py-3 border-2 text-white hover:bg-pink-600 hover:border-pink-600 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
