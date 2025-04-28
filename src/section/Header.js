import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import AOS from "aos";
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const [isManuopen, setMenuopen] = useState(false);

  const toggleManu = () => {
    setMenuopen(!isManuopen);
  }

  const closeManu = () => {
    setMenuopen(false);
  }

  const navItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contect' },
  ]

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    if (isManuopen) {
      closeManu();
    }
  }

  return (
    <>
      {/* Top info bar - now responsive with flex-wrap */}
      <div className='w-full sm:px-6 px-4 py-2 bg-themeyellow hidden sm:flex flex-wrap justify-center sm:justify-between items-center gap-3'>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'>
          <FaPhoneVolume className='size-[18px] flex-shrink-0' /> 
          <span className='whitespace-nowrap'>+91 99782 32537</span>
        </h1>
        <h1 className='text-xs sm:text-sm font-semibold flex justify-center items-center gap-2 text-center sm:text-left'>
          <FaMapMarkerAlt className='size-[18px] flex-shrink-0' /> 
          <span>12, Mallinath Complex, Opp. Sujata Flats, Jain Colony, Shahibag, Ahmedabad, Gujarat – 380004</span>
        </h1>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'>
          <MdEmail className='size-[18px] flex-shrink-0' /> 
          <span className='break-all'>wooden.ent@hotmail.com</span>
        </h1>
      </div>

      {/* Navigation bar */}
      <nav className='w-full bg-gray-100 flex justify-between items-center gap-1 px-4 sm:px-6 lg:px-16 py-4 sticky top-0 z-50'>
        <h1 className='text-themepurple font-bold text-xl sm:text-2xl lg:text-[30px] underline italic'>Wooden Enterprise</h1>
        
        {/* Desktop navigation */}
        <ul className='lg:flex justify-center items-center gap-4 xl:gap-10 hidden'>
          {
            navItems.map(({ link, path }) => (
              <Link
                key={path}
                className='text-black text-sm uppercase font-semibold cursor-pointer px-3 xl:px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white'
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={handleLinkClick}
              >
                {link}
              </Link>
            ))
          }
        </ul>

        {/* Mobile menu toggle */}
        <div className='flex justify-center items-center lg:hidden' onClick={toggleManu}>
          <div>
            {isManuopen ? 
              <FaXmark className='text-themepurple text-2xl sm:text-3xl cursor-pointer' /> : 
              <FaBars className='text-themepurple text-2xl sm:text-3xl cursor-pointer' />
            }
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        <div 
          className={`${isManuopen ? 'block' : 'hidden'} w-full h-auto bg-themepurple p-4 absolute top-[60px] sm:top-[70px] left-0 shadow-lg`}
        >
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className='text-white text-sm uppercase font-semibold cursor-pointer py-3 px-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center'
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={handleLinkClick}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;
