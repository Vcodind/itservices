import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import test1 from "../assets/test-1.jpg";
import test2 from "../assets/test-2.jpg";
import test3 from "../assets/test-3.jpg";
import test4 from "../assets/test-4.jpg";
import test5 from "../assets/test-5.jpg";

const Review = () => {
  const reviewdata = [
    {
      img: test1,
      name: "Sarah Johnson",
      post: "CTO, TechCorp Solutions",
      para: "Their server maintenance has reduced our downtime by 80%. The proactive monitoring catches issues before they affect our operations.",
      stars: 5
    },
    {
      img: test2,
      name: "Michael Chen",
      post: "IT Director, Global Logistics",
      para: "24/7 support with average response time under 15 minutes. They've become an extension of our own IT team.",
      stars: 5
    },
    {
      img: test3,
      name: "Jessica Williams",
      post: "Operations Manager, FinTech Innovations",
      para: "After their security audit, we patched critical vulnerabilities that could have cost millions in potential breaches.",
      stars: 4.5
    },
    {
      img: test4,
      name: "Alex Brown",
      post: "Senior Web Developer",
      para: "Their cloud migration expertise helped us reduce infrastructure costs by 40% while improving scalability.",
      stars: 5
    },
    {
      img: test5,
      name: "James Wilson",
      post: "Systems Architect",
      para: "The network optimization increased our data transfer speeds by 3x, significantly improving our remote team's productivity.",
      stars: 4.5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  // Helper function to render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <FaStar className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <FaStar className="text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div id='testimonials' className='w-full px-4 sm:px-6 lg:px-20 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h3 className="text-themepurple text-lg sm:text-xl font-semibold uppercase tracking-wider">
            Testimonials
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-themeyellow mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our IT services.
          </p>
        </div>

        <div data-aos="fade-up" className="relative mx-auto px-4 sm:px-0">
          {/* Custom navigation buttons */}
          <div className="absolute right-0 top-[-70px] hidden sm:flex space-x-2 z-10">
            <button 
              className="prev-arrow w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-themepurple hover:text-white transition-all" 
              aria-label="Previous slide"
              onClick={() => document.querySelector('.slick-prev').click()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="next-arrow w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-themepurple hover:text-white transition-all" 
              aria-label="Next slide"
              onClick={() => document.querySelector('.slick-next').click()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <Slider {...settings}>
            {reviewdata.map((item, index) => (
              <div key={index} className="px-3 py-4 focus:outline-none">
                <div className="bg-white rounded-xl shadow-custom hover:shadow-custom-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(item.stars)}
                      </div>
                      <div className="relative mb-6">
                        <FaQuoteLeft className="absolute top-0 left-0 text-themepurple opacity-20 text-4xl" />
                        <p className="text-gray-600 leading-relaxed pl-10 text-base sm:text-lg">
                          "{item.para}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={item.img} 
                          alt={`${item.name} testimonial`} 
                          className="rounded-full w-14 h-14 object-cover border-2 border-themepurple" 
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.post}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Mobile call to action */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200 sm:hidden">
            <a href="#contect" className="inline-block px-6 py-3 bg-themepurple text-white rounded-lg hover:bg-purple-700 transition-colors">
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;