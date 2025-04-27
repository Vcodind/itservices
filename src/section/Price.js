import React from 'react';
import { Link } from 'react-scroll';

const Price = () => {
  const plans = [
    {
      name: "Essentials",
      price: "499",
      description: "Basic IT support for small businesses",
      features: [
        "8/5 Help Desk Support",
        "Remote Monitoring",
        "Security Updates & Patches",
        "Basic Network Management",
        "Monthly IT Health Reports"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "999",
      description: "Complete IT management for growing businesses",
      features: [
        "24/7 Help Desk Support",
        "Proactive Monitoring & Alerts",
        "Comprehensive Security Suite",
        "Cloud Backup Solutions",
        "Quarterly IT Strategy Reviews",
        "Vendor Management",
        "Mobile Device Management"
      ],
      popular: true,
      buttonText: "Choose Professional"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for complex IT environments",
      features: [
        "All Professional Features",
        "Dedicated IT Manager",
        "On-site Support",
        "Custom Security Policies",
        "Priority Response SLAs",
        "IT Roadmap Planning",
        "Executive Reports & Briefings",
        "Disaster Recovery Planning"
      ],
      popular: false,
      buttonText: "Contact Us"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            No long-term contracts. No hidden fees. Just great IT support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden ${plan.popular 
                ? 'bg-themepurple shadow-xl transform md:scale-105 border-2 border-blue-400' 
                : 'bg-gray-800'}`}
            >
              {plan.popular && (
                <div className="bg-themepurple text-center py-2">
                  <span className="text-sm font-medium">MOST POPULAR</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-extrabold">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="ml-1 text-gray-300">/month</span>}
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`h-5 w-5 ${plan.popular ? 'text-blue-300' : 'text-green-500'} mr-2 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.popular ? 'text-white' : 'text-gray-300'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="contect" // The id of the contact section
                  smooth={true}
                  duration={1000}
                  className={`block w-full text-center py-3 px-4 rounded-md font-medium ${plan.popular 
                    ? 'bg-white text-themepurple hover:bg-gray-100' 
                    : 'bg-themepurple text-white hover:bg-blue-700'}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            We understand that every business has unique IT needs. Contact us for a personalized 
            IT assessment and custom quote tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 cursor-pointer">
            <Link 
              to="contect" // The id of the contact section
              smooth={true}
              duration={1000}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Request Custom Quote
            </Link>
            <Link 
              to="contect" // The id of the contact section
              smooth={true}
              duration={1000}
              className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-700"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
