import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, [])

  return (
    <div id='contect' className='w-full py-16 bg-gray-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            We're here to help you with all your IT service needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div data-aos="fade-right" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className='flex flex-col space-y-4'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type='text'
                    id="name"
                    name="name"
                    placeholder='John Doe'
                    className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themepurple focus:border-transparent transition-all'
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type='email'
                    id="email"
                    name="email"
                    placeholder='john@example.com'
                    className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themepurple focus:border-transparent transition-all'
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type='text'
                  id="subject"
                  name="subject"
                  placeholder='How can we help you?'
                  className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themepurple focus:border-transparent transition-all'
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Please describe your requirements...'
                  rows='5'
                  className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themepurple focus:border-transparent transition-all'
                ></textarea>
              </div>
              
              <button 
                type='submit' 
                className='inline-flex justify-center items-center px-6 py-3 bg-themepurple text-white rounded-lg text-lg font-semibold hover:bg-themeyellow hover:text-black transition-all duration-300 w-full sm:w-auto'
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div data-aos="fade-left" data-aos-delay="100" className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-themepurple text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 99782 32537</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-themepurple text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">wooden.ent@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-themepurple text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">12, Mallinath Complex, Opp. Sujata Flats,</p>
                    <p className="text-gray-600">Jain Colony, Shahibag,</p>
                    <p className="text-gray-600">Ahmedabad, Gujarat – 380004</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-themepurple text-white mr-4">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Weekend: 10am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-delay="200" className="bg-themepurple text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Emergency IT Support</h3>
              <p className="mb-4">Need urgent assistance? Our dedicated team is available 24/7 for critical IT issues.</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white text-themepurple flex items-center justify-center mr-3">
                  <FaPhone />
                </div>
                <span className="text-xl font-bold">+91 99782 32537</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div data-aos="fade-up" className="mt-12 rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.639214727569!2d72.59108917596961!3d23.047151315653596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8359800c95fd%3A0x95d8bd2ca9284b7e!2sShahibag%2C%20Ahmedabad%2C%20Gujarat%20380004!5e0!3m2!1sen!2sin!4v1714504890656!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
