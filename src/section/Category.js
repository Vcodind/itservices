import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaCloud, FaShieldAlt, FaChartBar, FaRobot } from 'react-icons/fa';
import { Link } from 'react-scroll'; 

const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const services = [
    { icon: <FaCode />, title: 'Web Development', delay: 100 },
    { icon: <FaCloud />, title: 'Cloud Solutions', delay: 200 },
    { icon: <FaShieldAlt />, title: 'Cybersecurity', delay: 300 },
    { icon: <FaChartBar />, title: 'Data Analytics', delay: 400 },
    { icon: <FaRobot />, title: 'AI Solutions', delay: 500 },
  ];

  return (
    <section className="w-full bg-gray-100 px-5 lg:px-20 pt-32 pb-20 flex flex-col lg:flex-row justify-center items-center gap-20">
      {/* Left Section */}
      <div data-aos="zoom-in" data-aos-delay="50" className="lg:w-1/2 w-full flex flex-col justify-center items-center  gap-5">
        <h2 className="text-themepurple text-xl font-semibold text-center lg:text-start">Our Expertise</h2>
        <h1 className="text-black font-bold text-4xl leading-tight text-center lg:text-start">IT Services</h1>
        <Link 
          to="services"   
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mt-10 px-8 py-3 rounded-lg bg-themepurple text-white hover:bg-themeyellow hover:text-black font-semibold transition-all cursor-pointer"
        >
          View All Services
        </Link>
      </div>

      {/* Right Section */}
      <div className="lg:w-3/4 w-full grid grid-cols-1 lg:grid-cols-5 gap-10">
        {services.map((service, index) => (
          <div key={index} data-aos="zoom-in" data-aos-delay={service.delay} className="flex flex-col justify-center items-center gap-6">
            <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className="text-themepurple text-4xl">{service.icon}</div>
            </div>
            <h3 className="text-black lg:text-sm text-xl font-semibold hover:text-themepurple cursor-pointer text-center">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
