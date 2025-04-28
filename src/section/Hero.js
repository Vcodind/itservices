import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { Link } from 'react-scroll';

const HeroSection = () => {
  const settings = { 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <section id='hero' className="relative w-full min-h-[500px] h-screen bg-gradient-to-r from-purple-600 via-indigo-800 to-purple-600">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full py-8 text-center text-white">
        <h1 data-aos="zoom-in" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
          Transform Your Business with IT Services & Software Development
        </h1>
        <p data-aos="fade-up" className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 mx-auto max-w-3xl">
          We provide 24/7 IT support to businesses of all sizes, ensuring seamless operations and growth.
        </p>
        
        {/* Slick Slider */}
        <div className="max-w-3xl mx-auto w-full">
          <Slider {...settings} className="mb-6 md:mb-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-800">What We Do</h3>
              <p className="text-gray-700 text-sm sm:text-base">We offer custom IT solutions that fit the needs of your business.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-800">Why Choose Us?</h3>
              <p className="text-gray-700 text-sm sm:text-base">Our team is available 24/7 to support you and ensure your systems run smoothly.</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-800">Get Started</h3>
              <p className="text-gray-700 text-sm sm:text-base">Start with a free consultation and see how we can help your business grow.</p>
            </div>
          </Slider>
        </div>
        
        {/* Call-to-Action Buttons */}
        <div data-aos="fade-up" className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <a 
            href="#services" 
            className="inline-flex justify-center items-center px-6 sm:px-8 py-2 sm:py-3 bg-themepurple text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-themeyellow hover:text-black transition-all duration-300"
          >
            Explore Our Services
          </a>
          <Link 
            to="contect" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="inline-flex justify-center items-center px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

