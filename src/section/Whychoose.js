import React from 'react';
import { FaUserCheck, FaClock, FaCertificate, FaHeadset, FaShieldAlt, FaTools } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUserCheck className="h-8 w-8 text-themepurple" />,
      title: "Experienced Team",
      description: "Our certified IT professionals have an average of 15+ years experience in the industry."
    },
    {
      icon: <FaClock className="h-8 w-8 text-themepurple" />,
      title: "Fast Response Time",
      description: "We guarantee a response within 15 minutes for critical issues, 24/7/365."
    },
    {
      icon: <FaCertificate className="h-8 w-8 text-themepurple" />,
      title: "Industry Certifications",
      description: "Our team holds certifications from Microsoft, Cisco, AWS, CompTIA, and more."
    },
    {
      icon: <FaHeadset className="h-8 w-8 text-themepurple" />,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support for your critical IT infrastructure."
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-themepurple" />,
      title: "Security First Approach",
      description: "We implement enterprise-grade security measures for businesses of all sizes."
    },
    {
      icon: <FaTools className="h-8 w-8 text-themepurple" />,
      title: "Custom Solutions",
      description: "Tailored IT strategies designed specifically for your business needs and goals."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            The preferred IT partner for businesses that demand excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-themepurple rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-4">Our Commitment to Excellence</h3>
              <p className="text-blue-100 mb-6">
                We don't just fix IT problems - we prevent them from happening in the first place. Our proactive approach to IT management means fewer disruptions, less downtime, and more productivity for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-blue-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-blue-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">15-minute response time for critical issues</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-blue-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">Fixed monthly pricing - no surprise bills</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-themepurple flex items-center justify-center p-8 md:p-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-100 text-xl">Client retention rate</div>
                <div className="mt-4 h-1 w-16 bg-blue-300 mx-auto"></div>
                <div className="mt-4 text-blue-100">Because we deliver results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;