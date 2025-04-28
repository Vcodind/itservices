import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
    });
    AOS.refresh();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Last updated: April 28, 2025
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8" data-aos="fade-up">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p>
              Wooden Enterprise ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our IT services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect 
              via the website or through our services includes:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 my-3">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, 
              and mailing address, that you voluntarily provide to us when you contact us, subscribe 
              to our newsletter, or request information about our services.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 my-3">Usage Data</h3>
            <p>
              We may also collect information about how the website is accessed and used. This data may 
              include your computer's Internet Protocol address (e.g., IP address), browser type, browser 
              version, the pages of our website that you visit, the time and date of your visit, the time 
              spent on those pages, unique device identifiers, and other diagnostic data.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc ml-6 my-3">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information 
              may be disclosed as follows:
            </p>
            <ul className="list-disc ml-6 my-3">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information 
                is necessary to respond to legal process, investigate or remedy potential violations of 
                our policies, or protect the rights, property, and safety of others.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third 
                parties that perform services for us or on our behalf, including payment processing, data 
                analysis, email delivery, hosting services, customer service, and marketing assistance.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection 
                with, or during negotiations of, any merger, sale of company assets, financing, or acquisition 
                of all or a portion of our business to another company.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal 
              information. While we have taken reasonable steps to secure the personal information you provide 
              to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, 
              and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="my-3 pl-4 border-l-4 border-themepurple">
              <p>Wooden Enterprise</p>
              <p>12, Mallinath Complex, Opp. Sujata Flats</p>
              <p>Jain Colony, Shahibag, Ahmedabad, Gujarat – 380004</p>
              <p>Email: wooden.ent@hotmail.com</p>
              <p>Phone: +91 99782 32537</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;