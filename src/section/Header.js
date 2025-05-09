import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import AOS from "aos";
import 'aos/dist/aos.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

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
  const [activeLink, setActiveLink] = useState('hero');

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isManuopen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isManuopen]);

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

  // Handle navigation for links
  const handleLinkClick = (path) => {
    setActiveLink(path);
    
    if (isManuopen) {
      closeManu();
    }

    if (!isHomePage) {
      // If not on homepage, navigate to homepage with section
      navigate('/', { state: { scrollTo: path } });
    }
  }

  // Handle logo click
  const handleLogoClick = () => {
    if (isHomePage) {
      // If on homepage, just scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // If not on homepage, navigate to homepage
      navigate('/');
    }
    
    if (isManuopen) {
      closeManu();
    }
  }

  // Render appropriate navigation link based on current page
  const renderNavLink = (link, path, index) => {
    if (isHomePage) {
      // If on homepage, use React Scroll
      return (
        <Link
          key={path}
          className={`text-black text-sm uppercase font-semibold cursor-pointer px-3 xl:px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white transition-all duration-300 ${
            isScrolled ? 'py-1.5' : 'py-2'
          } ${activeLink === path ? 'bg-themepurple text-white' : ''}`}
          to={path}
          spy={true}
          offset={-100}
          smooth={true}
          onClick={() => handleLinkClick(path)}
        >
          {link}
        </Link>
      );
    } else {
      // If on another page, use custom handler
      return (
        <span
          key={path}
          className={`text-black text-sm uppercase font-semibold cursor-pointer px-3 xl:px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white transition-all duration-300 ${
            isScrolled ? 'py-1.5' : 'py-2'
          } ${activeLink === path ? 'bg-themepurple text-white' : ''}`}
          onClick={() => handleLinkClick(path)}
        >
          {link}
        </span>
      );
    }
  }

  // Render appropriate mobile navigation link based on current page
  const renderMobileNavLink = (link, path, index) => {
    if (isHomePage) {
      // If on homepage, use React Scroll
      return (
        <Link
          className={`text-white text-xl sm:text-2xl font-medium block py-4 border-b border-purple-400/30 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-1/4 ${
            activeLink === path ? 'after:w-1/4' : 'after:w-0'
          }`}
          to={path}
          spy={true}
          offset={-100}
          smooth={true}
          onClick={() => handleLinkClick(path)}
        >
          {link}
        </Link>
      );
    } else {
      // If on another page, use custom handler
      return (
        <span
          className={`text-white text-xl sm:text-2xl font-medium block py-4 border-b border-purple-400/30 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-1/4 ${
            activeLink === path ? 'after:w-1/4' : 'after:w-0'
          } cursor-pointer`}
          onClick={() => handleLinkClick(path)}
        >
          {link}
        </span>
      );
    }
  }

  // Calculate and set the info bar height as a CSS variable
  useEffect(() => {
    const setInfoBarHeight = () => {
      const infoBar = document.querySelector('.info-bar');
      if (infoBar) {
        const height = infoBar.offsetHeight;
        document.documentElement.style.setProperty('--info-bar-height', `${height}px`);
      }
    };
    
    setInfoBarHeight();
    window.addEventListener('resize', setInfoBarHeight);
    
    return () => {
      window.removeEventListener('resize', setInfoBarHeight);
    };
  }, []);

  return (
    <>
      {/* Top info bar - fixed on tablet and desktop */}
      <div className={`info-bar w-full px-4 py-2 xs:py-3 bg-themeyellow hidden sm:flex flex-wrap justify-center sm:justify-between items-center gap-y-2 gap-x-4 fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isScrolled ? 'opacity-0 sm:h-0 pointer-events-none' : 'opacity-100 sm:h-auto'}`}>
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

      {/* Navigation bar with dynamic positioning based on screen size and scroll state */}
      <nav 
        className={`w-full ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-gray-100'
        } flex justify-between items-center gap-1 px-4 sm:px-6 lg:px-16 py-3 fixed left-0 right-0 z-[1000] transition-all duration-300 ease-in-out`}
        style={{
          top: isScrolled ? '0' : 'calc(var(--info-bar-height, 0px))',
        }}
      >
        <div className="flex items-center">
          <span
            onClick={handleLogoClick}
            className="cursor-pointer"
          >
            <h1 className={`${
              isScrolled ? 'text-xl sm:text-2xl' : 'text-xl sm:text-2xl lg:text-[30px]'
            } text-themepurple font-bold underline italic transition-all duration-300`}>
              Wooden Enterprise
            </h1>
          </span>
        </div>
        
        {/* Desktop navigation */}
        <ul className='lg:flex justify-center items-center gap-4 xl:gap-8 hidden'>
          {
            navItems.map(({ link, path }, index) => renderNavLink(link, path, index))
          }
        </ul>

        {/* Mobile menu toggle button */}
        <button 
          className='flex justify-center items-center lg:hidden p-2 focus:outline-none'
          onClick={toggleManu}
          aria-label="Toggle menu"
          aria-expanded={isManuopen}
        >
          {isManuopen ? 
            <FaXmark className='text-themepurple text-2xl sm:text-3xl cursor-pointer animate-fade-in' /> : 
            <FaBars className='text-themepurple text-2xl sm:text-3xl cursor-pointer animate-fade-in' />
          }
        </button>
        
        {/* Mobile navigation menu - redesigned */}
        <div 
          className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-themepurple to-purple-900 transition-transform duration-300 ease-in-out z-[1010] lg:hidden ${
            isManuopen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Close button in corner */}
          <button
            onClick={closeManu}
            aria-label="Close menu"
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <FaXmark className='text-white text-2xl' />
          </button>
          
          <div className="container mx-auto px-6 py-8 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-white text-2xl font-bold">Menu</h2>
            </div>
            
            {/* Navigation Items */}
            <ul className='flex-1 flex flex-col justify-start gap-3 w-full'>
              {navItems.map(({ link, path }, index) => (
                <li 
                  key={path}
                  className="transform transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: isManuopen ? `fadeInUp 0.5s ease forwards ${index * 0.1}s` : 'none'
                  }}
                >
                  {renderMobileNavLink(link, path, index)}
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-auto pt-6 border-t border-purple-400/30 w-full">
              <h3 className="text-white/80 text-sm mb-4 uppercase tracking-wider">Get in touch</h3>
              <div className='text-white flex flex-col gap-5'>
                <a href="tel:+919978232537" className='flex items-center gap-3 hover:text-themeyellow transition-colors'>
                  <FaPhoneVolume className='size-[18px]' /> 
                  <span>+91 99782 32537</span>
                </a>
                <div className='flex items-start gap-3'>
                  <FaMapMarkerAlt className='size-[18px] mt-1 flex-shrink-0' /> 
                  <span className='text-sm text-white/80'>12, Mallinath Complex, Opp. Sujata Flats, Jain Colony, Shahibag, Ahmedabad</span>
                </div>
                <a href="mailto:wooden.ent@hotmail.com" className='flex items-center gap-3 hover:text-themeyellow transition-colors'>
                  <MdEmail className='size-[18px]' /> 
                  <span>wooden.ent@hotmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed elements */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'h-[60px]' 
          : 'h-[68px] sm:h-[calc(68px+30px)] md:h-[calc(68px+38px)]'
      }`}></div>
      
      {/* Backdrop for mobile menu */}
      {isManuopen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[990] lg:hidden animate-fade-in"
          onClick={closeManu}
        ></div>
      )}
    </>
  )
}

export default Header;
