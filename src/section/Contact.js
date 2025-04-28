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
          <p className="mt-3 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
            We're here to help you with all your IT service needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Contact Form with improved responsiveness */}
          <div data-aos="fade-right" className="bg-white rounded-xl shadow-lg p-5 sm:p-8 transform hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
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
                className='inline-flex justify-center items-center px-6 py-3 bg-themepurple text-white rounded-lg text-lg font-semibold hover:bg-themeyellow hover:text-black transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg transform hover:-translate-y-1'
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information with card design */}
          <div className="flex flex-col gap-6">
            <div 
              data-aos="fade-left" 
              data-aos-delay="100" 
              className="bg-white rounded-xl shadow-lg p-6 transform hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-themepurple text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <a href="tel:+919978232537" className="text-gray-600 hover:text-themepurple transition-colors">+91 99782 32537</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-themepurple text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <a href="mailto:wooden.ent@hotmail.com" className="text-gray-600 hover:text-themepurple transition-colors">wooden.ent@hotmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-themepurple text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Location</h4>
                    <address className="text-gray-600 not-italic">
                      <p>12, Mallinath Complex, Opp. Sujata Flats,</p>
                      <p>Jain Colony, Shahibag,</p>
                      <p>Ahmedabad, Gujarat – 380004</p>
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-themepurple text-white mr-4">
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
            
            {/* Emergency support card with gradient background */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="200" 
              className="bg-gradient-to-r from-themepurple to-purple-800 text-white rounded-xl shadow-lg p-6 transform hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Emergency IT Support</h3>
              <p className="mb-4 text-purple-100">Need urgent assistance? Our dedicated team is available 24/7 for critical IT issues.</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white text-themepurple flex items-center justify-center mr-3 animate-pulse-slow">
                  <FaPhone />
                </div>
                <a href="tel:+919978232537" className="text-xl font-bold text-white hover:text-yellow-200 transition-colors">+91 99782 32537</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section with responsive height */}
        <div 
          data-aos="fade-up" 
          className="mt-12 rounded-xl overflow-hidden shadow-lg"
          style={{ height: 'clamp(250px, 40vw, 400px)' }}
        >
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
        
        {/* Social media links */}
        <div className="mt-10 flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="100">
          {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
            <a 
              key={platform}
              href={`https://${platform}.com/`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-themepurple hover:text-white transition-all duration-300 shadow transform hover:-translate-y-1"
            >
              <span className="sr-only">{platform}</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                {platform === 'facebook' && <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />}
                {platform === 'twitter' && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />}
                {platform === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                {platform === 'instagram' && <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
