import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Last updated: April 28, 2025
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8" data-aos="fade-up">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Wooden Enterprise
              ("we," "us," or "our"), concerning your access to and use of our website and services. You agree
              that by accessing our website and/or services, you have read, understood, and agree to be bound
              by all of these Terms of Service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Services</h2>
            <p>
              Wooden Enterprise provides IT services including but not limited to server maintenance, IT support,
              cloud solutions, network security, and other related services. We reserve the right to make
              changes to the services offered at any time without prior notice.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">User Representations</h2>
            <p>By using our services, you represent and warrant that:</p>
            <ul className="list-disc ml-6 my-3">
              <li>You have the legal capacity to enter into these Terms of Service;</li>
              <li>You are at least 18 years old;</li>
              <li>You will not access the website or services through automated or non-human means;</li>
              <li>You will not use the website or services for any illegal or unauthorized purpose;</li>
              <li>Your use of the services will not violate any applicable law or regulation.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Payments and Fees</h2>
            <p>
              We may offer services that require payment. By purchasing such services, you agree to pay all 
              fees due in accordance with the pricing and payment terms presented to you. Fees may change 
              at any time, and we are not required to provide prior notice.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Intellectual Property</h2>
            <p>
              The website, its original content, features, and functionality are and will remain the exclusive
              property of Wooden Enterprise. Our trademarks, service marks, graphics, and logos used in connection
              with our website or services are trademarks or registered trademarks of Wooden Enterprise.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Limitation of Liability</h2>
            <p>
              In no event will Wooden Enterprise, or its directors, employees, or agents be liable to you or any
              third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive
              damages, including lost profit, lost revenue, loss of data, or other damages arising from your use
              of the website or services, even if we have been advised of the possibility of such damages.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold Wooden Enterprise harmless, including our subsidiaries,
              affiliates, and all of our respective officers, agents, partners, and employees, from and against
              any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses,
              made by any third party due to or arising out of your use of the website or services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. Wooden Enterprise
              and yourself irrevocably consent that the courts of Gujarat shall have exclusive jurisdiction
              to resolve any dispute which may arise in connection with these terms.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will alert you about any
              changes by updating the "Last updated" date of these Terms of Service, and you waive any right
              to receive specific notice of each such change.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 my-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;