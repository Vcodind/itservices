import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of businesses do you typically work with?",
      answer: "We work with businesses of all sizes, from small startups to large enterprises. Our clients span various industries including healthcare, finance, manufacturing, professional services, and retail. We customize our IT solutions to fit the unique needs of each business, regardless of size or sector."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support for all our managed service clients. Our team monitors your systems around the clock and is ready to respond to critical issues at any time. For emergency situations, we guarantee response times as quick as 15 minutes, ensuring your business operations face minimal disruption."
    },
    {
      question: "How do your managed IT services work?",
      answer: "Our managed IT services provide comprehensive support for your technology infrastructure. We begin with a thorough assessment of your current IT environment, then develop a customized plan that meets your business needs and budget. Services typically include 24/7 monitoring, proactive maintenance, security management, help desk support, vendor management, and strategic IT planning—all for a predictable monthly fee."
    },
    {
      question: "What is the cost of your managed IT services?",
      answer: "The cost of our managed IT services varies based on the size of your business, the complexity of your IT environment, and the services you require. We offer custom pricing based on your specific needs and provide a detailed proposal after assessing your business requirements."
    },
    {
      question: "How quickly can I get started with your services?",
      answer: "We can get you up and running quickly! Once we’ve completed our assessment and you’ve chosen a plan, we typically begin implementing services within a few days to a week. Our team works efficiently to ensure minimal disruption to your business operations."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-gray-600">Here are some of the most common questions we receive. If you have a question that’s not listed, feel free to reach out to us.</p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} bg-white rounded-lg shadow-md`}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left px-6 py-4 text-xl font-semibold text-gray-800 hover:bg-gray-200 focus:outline-none"
              >
                {faq.question}
              </button>

              {openIndex === index && (
                <div className="p-6 text-lg text-gray-600 bg-gray-50 rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
