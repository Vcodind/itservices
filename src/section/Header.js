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
      <div className='w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6'>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaPhoneVolume className='size-[18px]' /> <span>+91 99782 32537</span></h1>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaMapMarkerAlt className='size-[18px]' /> <span>12, Mallinath Complex,
          Opp. Sujata Flats, Jain Colony,
          Shahibag, Ahmedabad, Gujarat – 380004</span></h1>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><MdEmail className='size-[18px]' /> <span>wooden.ent@hotmail.com</span></h1>
      </div>

      <nav className='w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 py-5 px-6 sticky top-0 z-50'>
        <h1 className='text-themepurple font-bold lg:text-[30px] text-xl underline italic'>Wooden Enterprise</h1>
        <ul className='lg:flex justify-center items-center gap-10 hidden'>
          {
            navItems.map(({ link, path }) => (
              <Link
                key={path}
                className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white'
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={handleLinkClick}  // Close the menu on click
              >
                {link}
              </Link>
            ))
          }
        </ul>

        {/* mobile menu start hear */}
        <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleManu}>
          <div>
            {isManuopen ? <FaXmark className='text-themepurple text-3xl cursor-pointer' /> : <FaBars className='text-themepurple text-3xl cursor-pointer' />}
          </div>
        </div>
        <div className={`${isManuopen ? 'flex' : 'hidden'} w-full h-fit bg-themepurple p-4 absolute top-[80px] left-0`} onClick={closeManu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full '>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className='text-white text-sm uppercase font-semibold cursor-pointer px-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center'
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={handleLinkClick}  // Close the menu on click
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
