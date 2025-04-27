import React from 'react';
import enterprice from '../assets/enterprice.jpg';
import cloud from '../assets/cloud.png';
import security from '../assets/security.jpg';  
import ecom from '../assets/ecom.png';
import dataana from '../assets/dataana.jpg';
import mobileapp from '../assets/mobileapp.jpg';
import ai from '../assets/ai.png';
import server from '../assets/server.jpg';
import block from '../assets/block.jpg';

const CaseStudies = () => {
  const allCaseStudies = [
    {
      id: 1,
      title: "Enterprise Network Upgrade",
      client: "Global Manufacturing Corp",
      brief: "Redesigned network infrastructure for a manufacturing company.",
      results: ["98% reduction in downtime", "40% faster speeds"],
      img: enterprice,
      category: "Network Management"
    },
    {
      id: 2,
      title: "Cloud Migration Strategy",
      client: "FinTech Solutions Inc",
      brief: "Migration from on-premises to hybrid cloud, optimizing costs.",
      results: ["43% cost reduction", "Instant scalability"],
      img: cloud,
      category: "Cloud Services"
    },
    {
      id: 3,
      title: "Security Overhaul",
      client: "Healthcare Provider Network",
      brief: "Implemented multi-layered security for healthcare compliance.",
      results: ["HIPAA compliance", "Zero breaches"],
      img: security,
      category: "Network Security"
    },
    {
      id: 4,
      title: "E-commerce Platform Optimization",
      client: "Retail Giant",
      brief: "Enhanced e-commerce performance during peak sales.",
      results: ["25% faster pages", "99.9% uptime"],
      img: ecom,
      category: "Web Development"
    },
    {
      id: 5,
      title: "Data Analytics Implementation",
      client: "Logistics Company",
      brief: "Optimized delivery routes using data analytics.",
      results: ["15% fuel savings", "20% faster deliveries"],
      img: dataana,
      category: "Data Science"
    },
    {
      id: 6,
      title: "Mobile App Development",
      client: "Startup Incubator",
      brief: "Designed mobile app to boost user engagement.",
      results: ["50% retention boost", "Cross-platform"],
      img: mobileapp,
      category: "App Development"
    },
    {
      id: 7,
      title: "AI Chatbot Integration",
      client: "E-Learning Platform",
      brief: "Built smart chatbot for instant support.",
      results: ["24/7 support", "60% resolution rate"],
      img: ai,
      category: "Artificial Intelligence"
    },
    {
      id: 8,
      title: "Serverless Architecture",
      client: "Travel Booking App",
      brief: "Moved backend to serverless for scaling.",
      results: ["Auto scaling", "Reduced server costs"],
      img: server,
      category: "Cloud Computing"
    },
    {
      id: 9,
      title: "Blockchain Integration",
      client: "Finance App",
      brief: "Integrated blockchain for secure transactions.",
      results: ["100% transparency", "Reduced fraud"],
      img: block,
      category: "Blockchain"
    }
  ];

  return (
    <div className="py-16 bg-gray-100 mx-5 lg:mx-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Case Studies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Real problems. Real solutions. Real results.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap min-w-max hover:[animation-play-state:paused]">
            {allCaseStudies.concat(allCaseStudies).map((study) => (
              <div
                key={study.id + Math.random()}
                className="bg-white w-80 flex-shrink-0 m-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <img src={study.img} alt={study.title} className="h-48 w-full object-cover" />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{study.title}</h3>
                  <p className="text-sm text-blue-600 mb-2">Client: {study.client}</p>
                  <p className="text-gray-600 text-sm mb-2">{study.brief}</p>
                  <ul className="text-gray-700 text-xs list-disc list-inside mt-2">
                    {study.results.map((res, index) => (
                      <li key={index}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;
