import React, { useState, useEffect } from 'react';
import { FaServer, FaShieldAlt, FaTools, FaNetworkWired, FaHeadset, FaDatabase, FaCode, FaLaptopCode, FaCloud, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const services = [
    {
      icon: <FaServer className="text-4xl text-blue-600" />,
      title: 'Server Maintenance',
      description: 'Proactive server monitoring and maintenance to ensure maximum uptime.',
      features: ['24/7 monitoring', 'Performance optimization', 'Hardware diagnostics', 'Firmware updates'],
      detailedDescription: 'Our comprehensive server maintenance services ensure your infrastructure remains stable and secure. We provide regular health checks, patch management, and capacity planning to prevent downtime before it occurs.',
      additionalFeatures: [
        'Real-time performance metrics',
        'Automated backup verification',
        'Disaster recovery planning',
        'Root cause analysis for incidents',
        'Custom maintenance schedules'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduced hardware failures',
        'Improved server lifespan',
        'Optimized resource utilization'
      ]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: 'Network Security',
      description: 'Comprehensive security solutions for your IT infrastructure.',
      features: ['Firewall management', 'Vulnerability scanning', 'Security audits', 'Threat detection'],
      detailedDescription: 'Protect your business from evolving cyber threats with our multi-layered security approach. We implement enterprise-grade security measures tailored to your specific risk profile.',
      additionalFeatures: [
        'Intrusion detection systems',
        'Security awareness training',
        'Compliance management',
        'Penetration testing',
        'Security policy development'
      ],
      benefits: [
        'Protection against data breaches',
        'Regulatory compliance assurance',
        'Reduced security incident response time',
        'Comprehensive security reporting'
      ]
    },
    {
      icon: <FaTools className="text-4xl text-orange-600" />,
      title: 'IT Support',
      description: 'Round-the-clock technical support for your business needs.',
      features: ['Help desk services', 'Remote assistance', 'On-site support', 'System troubleshooting'],
      detailedDescription: 'Our IT support team is available 24/7 to resolve your technical issues quickly and efficiently, minimizing disruption to your business operations.',
      additionalFeatures: [
        'Priority response tiers',
        'Dedicated account manager',
        'Preventive maintenance',
        'Hardware procurement assistance',
        'Software license management'
      ],
      benefits: [
        'Faster resolution times',
        'Reduced downtime',
        'Single point of contact',
        'Predictable monthly costs'
      ]
    },
    {
      icon: <FaNetworkWired className="text-4xl text-purple-600" />,
      title: 'Network Management',
      description: 'Complete management of your network infrastructure.',
      features: ['Network monitoring', 'Configuration management', 'Performance tuning', 'Bandwidth optimization'],
      detailedDescription: 'Our network management services ensure your connectivity remains fast, reliable and secure. We proactively monitor and optimize your network to prevent issues before they impact your business.',
      additionalFeatures: [
        'Network traffic analysis',
        'Capacity planning',
        'Equipment lifecycle management',
        'Redundancy planning',
        'Network documentation'
      ],
      benefits: [
        'Minimized network downtime',
        'Optimized network performance',
        'Reduced operational costs',
        'Enhanced business productivity'
      ]
    },
    {
      icon: <FaDatabase className="text-4xl text-red-600" />,
      title: 'Database Administration',
      description: 'Professional management of your database systems.',
      features: ['Backup & recovery', 'Performance tuning', 'Security management', 'Migration services'],
      detailedDescription: 'Our database administration team ensures your critical data is secure, optimized and always available. We manage all aspects of database performance, security and reliability.',
      additionalFeatures: [
        'Database health monitoring',
        'Query optimization',
        'High availability configuration',
        'Schema design and optimization',
        'Data warehousing solutions'
      ],
      benefits: [
        'Improved application performance',
        'Data integrity assurance',
        'Minimized database downtime',
        'Scalable database infrastructure'
      ]
    },
    {
      icon: <FaCode className="text-4xl text-indigo-600" />,
      title: 'Software Development',
      description: 'Custom software solutions for your business requirements.',
      features: ['Web applications', 'Mobile apps', 'Enterprise software', 'API development'],
      detailedDescription: 'Our expert development team creates custom software solutions tailored to your unique business needs, from concept to deployment and beyond.',
      additionalFeatures: [
        'User experience design',
        'Agile development processes',
        'Quality assurance testing',
        'Ongoing maintenance',
        'Integration services'
      ],
      benefits: [
        'Tailored solutions to specific needs',
        'Improved business efficiency',
        'Competitive advantage',
        'Scalable software architecture'
      ]
    },
    {
      icon: <FaLaptopCode className="text-4xl text-teal-600" />,
      title: 'IT Consulting',
      description: 'Strategic guidance for your technology infrastructure.',
      features: ['Technology planning', 'System architecture', 'Cloud strategy', 'Digital transformation'],
      detailedDescription: 'Our IT consulting services provide strategic technology guidance to help your business achieve its goals through optimal IT planning and implementation.',
      additionalFeatures: [
        'Technology roadmapping',
        'IT budget planning',
        'Vendor management',
        'Technology stack assessment',
        'IT policy development'
      ],
      benefits: [
        'Aligned IT and business goals',
        'Optimized technology investments',
        'Reduced technology risks',
        'Clear technology strategy'
      ]
    },
    {
      icon: <FaCloud className="text-4xl text-cyan-600" />,
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions and migration services.',
      features: ['Cloud migration', 'Hybrid cloud solutions', 'Cost optimization', 'Security management'],
      detailedDescription: 'Our cloud experts help you leverage the full potential of cloud computing, from strategic planning to implementation and ongoing management.',
      additionalFeatures: [
        'Multi-cloud orchestration',
        'Cloud architecture design',
        'Container solutions',
        'Serverless application development',
        'Cloud compliance management'
      ],
      benefits: [
        'Increased business agility',
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced disaster recovery'
      ]
    },
    {
      icon: <FaHeadset className="text-4xl text-pink-600" />,
      title: 'Help Desk Services',
      description: 'Professional support for your end-users and employees.',
      features: ['Ticket management', 'Remote support', 'Knowledge base', 'User training'],
      detailedDescription: 'Our help desk services provide reliable, responsive support for your team, ensuring they have the technical assistance they need, when they need it.',
      additionalFeatures: [
        'Service level agreements',
        'Multi-channel support options',
        'Self-service portal',
        'Automated ticket routing',
        'Support metrics and reporting'
      ],
      benefits: [
        'Improved employee productivity',
        'Faster issue resolution',
        'Reduced IT frustration',
        'Consistent support experience'
      ]
    }
  ];

  const toggleServiceExpansion = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  // Function to close the popup after clicking contact button
  const handleContactClick = () => {
    setExpandedService(null);
  };

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (expandedService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandedService]);

  return (
    <div id='services' className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Completely redesigned service detail modal with full responsiveness */}
      {expandedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-3 overflow-hidden">
          <div 
            className="bg-white rounded-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl h-[90vh] sm:h-auto sm:max-h-[85vh] flex flex-col"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-3 sm:p-4 border-b">
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0">
                  {services[expandedService].icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 pr-2">
                  {services[expandedService].title}
                </h3>
              </div>
              <button 
                onClick={() => setExpandedService(null)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5">
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {services[expandedService].detailedDescription}
              </p>
              
              {/* Features and Benefits section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Key Features */}
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900 border-b pb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {services[expandedService].features.concat(services[expandedService].additionalFeatures).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900 border-b pb-2">
                    Business Benefits
                  </h4>
                  <ul className="space-y-2">
                    {services[expandedService].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="border-t p-3 sm:p-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100">
                <h4 className="text-sm sm:text-base font-semibold mb-2 text-blue-800">
                  Ready to get started?
                </h4>
                <p className="text-xs sm:text-sm text-blue-700 mb-3">
                  Contact our team to discuss how our {services[expandedService].title.toLowerCase()} services can benefit your organization.
                </p>
                <Link 
                  to="contect"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={handleContactClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-xs sm:text-sm rounded-md transition-colors inline-block cursor-pointer"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            IT Services & Server Maintenance
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Comprehensive IT solutions to keep your business running smoothly
          </p>
        </div>

        {/* Service cards with improved responsive design */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              <div className="p-5 sm:p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-gray-500 italic pl-7">and more...</li>
                  )}
                </ul>
              </div>
              <div className="px-5 sm:px-6 py-4 bg-gray-50 border-t border-gray-200 flex">
                <button 
                  onClick={() => toggleServiceExpansion(index)}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center w-full justify-center group"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more 
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;