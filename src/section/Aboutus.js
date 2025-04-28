import React, { useEffect } from 'react';
import ourtame from "../assets/ourtame.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <section id='about' className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          <h3 className="text-themepurple text-lg sm:text-xl font-semibold uppercase tracking-wider">
            Our Company
          </h3>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            About Us
          </h2>
          <div className="w-24 h-1 bg-themeyellow mx-auto mt-4"></div>
          <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
            Wooden Enterprise is a rising IT company committed to providing high-quality app development, 
            live server deployment, and project maintenance services.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div data-aos="fade-right" className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-xl shadow-custom">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses with reliable, innovative, and scalable digital solutions that drive real-world success.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <div className="bg-themepurple bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center">
                        <FaLightbulb className="text-themepurple" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Innovation-Driven Solutions</h4>
                      <p className="mt-2 text-gray-600">
                        We specialize in designing and developing customized mobile and web applications that are built to perform at scale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <div className="bg-themepurple bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center">
                        <FaHandshake className="text-themepurple" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Strong Partnerships</h4>
                      <p className="mt-2 text-gray-600">
                        At Wooden Enterprise, we don't just deliver technology — we build strong partnerships with our clients, 
                        working closely with them to understand their needs and support their growth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <div className="bg-themepurple bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center">
                        <FaChartLine className="text-themepurple" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Continuous Growth</h4>
                      <p className="mt-2 text-gray-600">
                        Whether you are a startup, SME, or enterprise, we bring deep technical expertise, fast delivery, and ongoing support to every project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-themepurple rounded-lg opacity-10 transform -rotate-6"></div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-themeyellow rounded-lg opacity-10 transform rotate-6"></div>
                <img 
                  src={ourtame}
                  alt="Our Team" 
                  className="rounded-lg shadow-lg max-w-full relative z-10 object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 sm:py-16 px-6 rounded-xl shadow-lg" data-aos="fade-up">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">Our Values</h3>
            <div className="w-24 h-1 bg-themeyellow mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white bg-opacity-5 p-6 rounded-lg hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-12 w-12 bg-themepurple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-themeyellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-center text-white mb-3">Innovation</h4>
              <p className="text-gray-300 text-center">
                We constantly push the boundaries of technology to deliver innovative solutions that address complex business challenges.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-5 p-6 rounded-lg hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-12 w-12 bg-themepurple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-themeyellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-center text-white mb-3">Integrity</h4>
              <p className="text-gray-300 text-center">
                We maintain the highest level of integrity in every interaction and decision, always putting our clients' interests first.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-5 p-6 rounded-lg hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-12 w-12 bg-themepurple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-themeyellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-center text-white mb-3">Collaboration</h4>
              <p className="text-gray-300 text-center">
                We believe in the power of collaboration, both within our team and with our clients, to achieve exceptional results.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
            <a 
              href="#contect" 
              className="inline-block px-8 py-3 bg-themeyellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Work with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
