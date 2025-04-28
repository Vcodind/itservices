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
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {/* Top info bar - with responsive design */}
      <div className='w-full px-4 py-2 xs:py-3 bg-themeyellow hidden sm:flex flex-wrap justify-center sm:justify-between items-center gap-y-2 gap-x-4'>
        <div className='text-sm font-semibold flex justify-center items-center gap-2 whitespace-nowrap'>
          <FaPhoneVolume className='size-[18px] flex-shrink-0' /> 
          <span>+91 99782 32537</span>
        </div>
        <div className='text-xs sm:text-sm font-semibold hidden md:flex justify-center items-center gap-2 text-center sm:text-left'>
          <FaMapMarkerAlt className='size-[18px] flex-shrink-0' /> 
          <span className='line-clamp-1'>12, Mallinath Complex, Opp. Sujata Flats, Jain Colony, Shahibag, Ahmedabad, Gujarat – 380004</span>
        </div>
        <div className='text-sm font-semibold flex justify-center items-center gap-2'>
          <MdEmail className='size-[18px] flex-shrink-0' /> 
          <span className='break-all'>wooden.ent@hotmail.com</span>
        </div>
      </div>

      {/* Navigation bar with animated scroll effect */}
      <nav 
        className={`w-full ${
          isScrolled ? 'bg-white shadow-custom' : 'bg-gray-100'
        } flex justify-between items-center gap-1 px-4 sm:px-6 lg:px-16 py-4 sticky top-0 z-50 transition-all duration-300`}
      >
        <div className="flex items-center">
          <h1 className={`${
            isScrolled ? 'text-xl sm:text-2xl' : 'text-xl sm:text-2xl lg:text-[30px]'
          } text-themepurple font-bold underline italic transition-all duration-300`}>
            Wooden Enterprise
          </h1>
        </div>
        
        {/* Desktop navigation */}
        <ul className='lg:flex justify-center items-center gap-4 xl:gap-8 hidden'>
          {
            navItems.map(({ link, path }) => (
              <Link
                key={path}
                className={`text-black text-sm uppercase font-semibold cursor-pointer px-3 xl:px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white transition-all duration-300 ${
                  isScrolled ? 'py-1.5' : 'py-2'
                }`}
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

        {/* Mobile menu toggle with improved animation */}
        <div className='flex justify-center items-center lg:hidden' onClick={toggleManu}>
          <div className="relative z-50">
            {isManuopen ? 
              <FaXmark className='text-themepurple text-2xl sm:text-3xl cursor-pointer animate-fade-in' /> : 
              <FaBars className='text-themepurple text-2xl sm:text-3xl cursor-pointer animate-fade-in' />
            }
          </div>
        </div>
        
        {/* Mobile navigation menu with improved animation and styling */}
        <div 
          className={`${
            isManuopen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
          } fixed top-0 right-0 w-full xs:w-[300px] h-screen bg-themepurple p-6 pt-20 shadow-lg transition-all duration-300 ease-in-out overflow-y-auto z-40`}
        >
          <div className="absolute top-6 right-6 lg:hidden" onClick={toggleManu}>
            <FaXmark className='text-white text-2xl cursor-pointer' />
          </div>
          
          <ul className='flex flex-col justify-start items-center gap-4 w-full mt-6'>
            {navItems.map(({ link, path }, index) => (
              <Link
                key={path}
                className={`text-white text-lg uppercase font-semibold cursor-pointer py-3 px-4 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={handleLinkClick}
              >
                {link}
              </Link>
            ))}
            
            {/* Mobile contact info */}
            <div className="mt-8 pt-8 border-t border-purple-400 w-full">
              <div className='text-white flex flex-col gap-4 mt-4'>
                <div className='flex items-center gap-3'>
                  <FaPhoneVolume className='size-[18px]' /> 
                  <span>+91 99782 32537</span>
                </div>
                <div className='flex items-start gap-3'>
                  <FaMapMarkerAlt className='size-[18px] mt-1 flex-shrink-0' /> 
                  <span className='text-sm'>12, Mallinath Complex, Opp. Sujata Flats, Jain Colony, Shahibag, Ahmedabad</span>
                </div>
                <div className='flex items-center gap-3'>
                  <MdEmail className='size-[18px]' /> 
                  <span>wooden.ent@hotmail.com</span>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      
      {/* Backdrop for mobile menu */}
      {isManuopen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden animate-fade-in"
          onClick={closeManu}
        ></div>
      )}
    </>
  )
}

export default Header;
