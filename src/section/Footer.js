import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "hero" },
    { name: "Services", path: "services" },
    { name: "About Us", path: "about" },
    { name: "Contact", path: "contect" },
  ];
  
  const serviceItems = [
    "Server Maintenance", 
    "IT Support", 
    "Cloud Solutions", 
    "Network Security"
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Newsletter subscription */}
        <div className="max-w-5xl mx-auto mb-12 bg-themepurple bg-opacity-20 rounded-lg p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100 text-sm sm:text-base">Subscribe to our newsletter for the latest IT trends and services.</p>
            </div>
            <form className="flex flex-col xs:flex-row gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-blue-300 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-themeyellow w-full xs:w-auto"
              />
              <button 
                type="submit" 
                className="bg-themeyellow text-black px-5 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-3 md:mb-4 text-themeyellow">Wooden Enterprise</h3>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              Providing reliable IT services and server maintenance solutions since 2010.
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-themepurple transition-colors">
                <FaFacebook className="text-white" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-themepurple transition-colors">
                <FaTwitter className="text-white" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-themepurple transition-colors">
                <FaLinkedin className="text-white" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-themepurple transition-colors">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="text-gray-400 hover:text-themeyellow transition-colors text-sm md:text-base cursor-pointer flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {serviceItems.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-themeyellow transition-colors text-sm md:text-base flex items-center">
                  <span className="mr-2">›</span> {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm md:text-base">
                <FaMapMarkerAlt className="text-themeyellow mt-1 mr-3 flex-shrink-0" />
                <address className="text-gray-400 not-italic">
                  12, Mallinath Complex, Opp. Sujata Flats,
                  <br /> Jain Colony, Shahibag,
                  <br /> Ahmedabad, Gujarat – 380004
                </address>
              </li>
              <li className="flex items-center text-sm md:text-base">
                <FaEnvelope className="text-themeyellow mr-3 flex-shrink-0" />
                <a href="mailto:wooden.ent@hotmail.com" className="text-gray-400 hover:text-themeyellow">
                  wooden.ent@hotmail.com
                </a>
              </li>
              <li className="flex items-center text-sm md:text-base">
                <FaPhone className="text-themeyellow mr-3 flex-shrink-0" />
                <a href="tel:+919978232537" className="text-gray-400 hover:text-themeyellow">
                  +91 99782 32537
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            © {currentYear} Wooden Enterprise. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-8">
            <RouterLink to="/privacy-policy" className="hover:text-themeyellow transition-colors">Privacy Policy</RouterLink>
            <RouterLink to="/terms-of-service" className="hover:text-themeyellow transition-colors">Terms of Service</RouterLink>
            <a href="#" className="hover:text-themeyellow transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}