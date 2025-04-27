import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
// import { settings } from './sliderSettings';  // Assuming the settings for the slick slider are in a separate file

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
    <section id='hero' className="relative w-full h-screen bg-gradient-to-r from-purple-600 via-indigo-800 to-purple-600">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full text-center text-white">
        <h1 data-aos="zoom-in" className="text-2xl sm:text-5xl font-extrabold leading-tight mb-6">
          Transform Your Business with IT Services & Software Development
        </h1>
        <p data-aos="fade-up" className="text-sm sm:text-xl mb-8">
          We provide 24/7 IT support to businesses of all sizes, ensuring seamless operations and growth.
        </p>
        
        {/* Slick Slider */}
        <Slider {...settings} className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
            <p className="text-gray-700">We offer custom IT solutions that fit the needs of your business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <p className="text-gray-700">Our team is available 24/7 to support you and ensure your systems run smoothly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Get Started</h3>
            <p className="text-gray-700">Start with a free consultation and see how we can help your business grow.</p>
          </div>
        </Slider>
        
        {/* Call-to-Action Buttons */}
        <div data-aos="fade-up" className="flex justify-center gap-4">
          <a 
            href="#services" 
            className="inline-flex items-center px-8 py-3 bg-themepurple text-white rounded-lg text-lg font-semibold hover:bg-themeyellow hover:text-black transition-all duration-300"
          >
            Explore Our Services
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

