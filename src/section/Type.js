import React, { useEffect, useState } from 'react';
import { FaServer, FaShieldAlt, FaTools } from 'react-icons/fa';
import AOS from "aos";
import 'aos/dist/aos.css';

const ServerMaintenance = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const services = [
    {
      name: "Enterprise Server Suite",
      icon: <FaServer className="text-4xl text-themeyellow" />,
      title: "Server Monitoring",
      description: "24/7 server health monitoring with instant alerts",
      bgColor: "bg-gray-800",
      details: [
        "Real-time CPU, memory, and disk usage monitoring",
        "Automated alerts via email/SMS for critical issues",
        "Historical performance data and trend analysis",
        "Customizable threshold settings"
      ]
    },
    {
      name: "Security Shield Pro",
      icon: <FaShieldAlt className="text-4xl text-themeyellow" />,
      title: "Security Patches",
      description: "Regular security updates and vulnerability management",
      bgColor: "bg-gray-700",
      details: [
        "Monthly security patch deployment",
        "Zero-day vulnerability protection",
        "Compliance with industry security standards",
        "Detailed patch management reports"
      ]
    },
    {
      name: "Maintenance Care Plus",
      icon: <FaTools className="text-4xl text-themeyellow" />,
      title: "Preventive Maintenance",
      description: "Proactive measures to prevent system failures",
      bgColor: "bg-gray-800",
      details: [
        "Scheduled hardware inspections",
        "System optimization and cleanup",
        "Backup integrity verification",
        "Firmware and driver updates"
      ]
    },
    
  ];

  return (
    <div className='w-full lg:px-20 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-6'>
      {services.map((service, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={(index + 1) * 100}
          className={`flex flex-col justify-between items-start p-10 rounded-lg ${service.bgColor} text-white relative min-h-[400px]`}
        >
          <div>
            <div className="flex items-center p-4 rounded-full bg-gray-900">
              {service.icon}
              <span className="text-2xl text-themeyellow ml-3">{service.name}</span>
            </div>
            <h1 className='text-3xl font-semibold mt-4'>{service.title}</h1>
            <p className='text-gray-300 text-lg my-4'>{service.description}</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              {index === 0 && (
                <>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-themeyellow rounded-full"></span>
                    Real-time performance tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-themeyellow rounded-full"></span>
                    Automated incident reporting
                  </li>
                </>
              )}
              {index === 1 && (
                <>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-themeyellow rounded-full"></span>
                    OS and software updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-themeyellow rounded-full"></span>
                    Firewall configuration
                  </li>
                </>
              )}
              {index === 2 && (
                <>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-themeyellow rounded-full"></span>
                    Hardware diagnostics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-themeyellow rounded-full"></span>
                    Backup system verification
                  </li>
                </>
              )}
            </ul>
          </div>

          <button
            className='bg-themeyellow w-full px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-500 transition-colors relative z-10'
            onMouseEnter={() => setExpandedCard(index)}
            onMouseLeave={() => setExpandedCard(null)}
          >
            Learn More
          </button>

          {/* Expanded Details Card */}
          {expandedCard === index && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-90 rounded-lg p-6 flex flex-col justify-center items-start z-0">
              <h3 className="text-xl font-bold text-themeyellow mb-4">Service Details:</h3>
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-themeyellow mr-2">•</span>
                    <span className="text-gray-200">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-sm text-gray-400">
                Contact us for custom solutions tailored to your infrastructure needs.
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServerMaintenance;