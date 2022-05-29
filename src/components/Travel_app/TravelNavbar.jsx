import React from 'react';
import { BsSearch, BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const TravelNavbar = () => {
  const navList = ['Home', 'Destinations', 'Travel', 'View', 'Book'];
  const [nav, setNav] = React.useState(false);
  return (
    <div className='absolute w-full h-screen font-[Poppins] text-white'>
      <div className='flex justify-between items-center p-4'>
        <h1>BEACHES.</h1>
        <ul className='hidden md:flex'>
          {navList.map((list, index) => {
            return <li key={index}>{list}</li>;
          })}
        </ul>
        <div className='hidden md:flex'>
          <BsPerson className='icon' />
          <BsSearch className='icon' />
        </div>
        <div className='md:hidden z-10' onClick={() => setNav(!nav)}>
          {!nav ? (
            <HiOutlineMenuAlt4 className='icon' />
          ) : (
            <AiOutlineClose className='icon text-black' />
          )}
        </div>
      </div>
      <div
        className={
          !nav
            ? 'absolute top-0 left-0 flex p-4 flex-col w-full bg-gray-200/90 text-black transition-all ease-in-out duration-500 translate-y-[-100%]'
            : 'absolute top-0 left-0 flex w-full p-4 flex-col md:hidden bg-gray-200/90 text-black transition-all ease-in-out duration-500 translate-y-0'
        }
      >
        <h1>BEACHES.</h1>
        <ul className='flex flex-col'>
          {navList.map((list, index) => {
            return (
              <li
                key={index}
                className='p-4 border-b-2 border-black hover:bg-gray-300'
              >
                {list}
              </li>
            );
          })}
        </ul>
        <div className='flex flex-col'>
          <button className='p-3 bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-md mt-4 text-white'>
            Search
          </button>
          <button className='p-3 bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-md my-6 text-white'>
            Account
          </button>
        </div>
        <div className='flex justify-between items-center my-6'>
          <FaFacebook className='icon text-blue-900 hover:text-blue-700' />
          <FaTwitter className='icon text-blue-900 hover:text-blue-700' />
          <FaYoutube className='icon text-blue-900 hover:text-blue-700' />
          <FaPinterest className='icon text-blue-900 hover:text-blue-700' />
          <FaInstagram className='icon text-blue-900 hover:text-blue-700' />
        </div>
      </div>
    </div>
  );
};

export default TravelNavbar;
