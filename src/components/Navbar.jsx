import React from 'react';
import logo from '../assets/logo.png';
import pgLogo from '../assets/pg.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { SiFiverr } from 'react-icons/si';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const list = ['Home', 'About', 'Skills', 'Work', 'Contact'];
  return (
    <div className='fixed w-full h-[80px] bg-[#0a192f] flex justify-between items-center p-4 text-gray-300 font-[Raleway]'>
      <a href='/'>
        <img
          src={pgLogo}
          alt='logo_image'
          className='w-[70px] cursor-pointer'
        />
      </a>
      <ul className='hidden md:flex'>
        {list.map((list, index) => {
          return (
            <li
              key={index}
              className='border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-2xl transition-all duration-300 '
            >
              <Link to={list} smooth={true} duration={500}>
                {list}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className={`md:hidden cursor-pointer navMenu z-20 ${nav && 'open'}`}
        onClick={() => setNav(!nav)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <div
        className='md:hidden transition-all duration-150 cursor-pointer z-20'
        onClick={() => setNav(!nav)}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}
      <ul
        className={
          !nav
            ? 'absolute w-full h-screen top-0 left-[100%] flex flex-col justify-center items-center duration-500'
            : 'absolute w-full h-screen top-0 left-0 flex flex-col md:hidden justify-center items-center bg-[#0a192f] z-10 duration-500'
        }
      >
        {list.map((list, index) => {
          return (
            <li
              className='text-4xl py-6 transition-all hover:border-b-2 border-white duration-100'
              key={index}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={list}
                smooth={true}
                duration={500}
              >
                {list}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='fixed hidden lg:flex flex-col top-[35%] left-0'>
        <ul>
          <li className='flex justify-between items-center w-[160px] h-[60px] border-none ml-[-100px] hover:ml-[-10px] bg-blue-600 duration-300'>
            <a
              href='https://www.linkedin.com/in/pankaj-gaikwad-39b019241'
              target={'_blank'}
              className='flex justify-between items-center w-full'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='flex justify-between items-center w-[160px] h-[60px] border-none ml-[-100px] hover:ml-[-10px] bg-[#333333] duration-300'>
            <a
              href='https://github.com/PankajGaikwad5'
              target={'_blank'}
              className='flex justify-between items-center w-full'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='flex justify-between items-center w-[160px] h-[60px] border-none ml-[-100px] hover:ml-[-10px] bg-[#119e30] duration-300'>
            <a
              href='https://www.fiverr.com/pankajgaikwa403?up_rollout=true'
              target={'_blank'}
              className='flex justify-between items-center w-full'
            >
              Fiver <SiFiverr size={30} />
            </a>
          </li>
          <li className='flex justify-between items-center w-[160px] h-[60px] border-none ml-[-100px] hover:ml-[-10px] bg-[#6fc2b0] duration-300'>
            {/* <a href='/' className='flex justify-between items-center w-full'>
              Email <HiOutlineMail size={30} />
            </a> */}
            <Link
              to={'Contact'}
              smooth={true}
              duration={500}
              className='flex justify-between items-center w-full'
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          {/* <li className='flex justify-between items-center w-[160px] h-[60px] border-none ml-[-100px] hover:ml-[-10px] bg-[#565f69] duration-300'>
            <a href='/' className='flex justify-between items-center w-full'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
      {/* <div className='w-[80%] fixed left-[50%] bottom-[5%] translate-x-[-50%] h-8 bg-gray-100/80 max-w-[500px] rounded-md flex items-center text-black px-4 whitespace-nowrap overflow-hidden'>
        <p className='ml-4 font-bold note text-[#0a192f]'>
          I'll keep adding more skills and works as i progress
        </p>
      </div> */}
    </div>
  );
};

export default Navbar;
