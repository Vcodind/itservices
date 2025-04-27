import React, { useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { FaStar, FaQuoteLeft } from "react-icons/fa"
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
      para: "Their server maintenance has reduced our downtime by 80%. The proactive monitoring catches issues before they affect our operations."
    },
    {
      img: test2,
      name: "Michael Chen",
      post: "IT Director, Global Logistics",
      para: "24/7 support with average response time under 15 minutes. They've become an extension of our own IT team."
    },
    {
      img: test3,
      name: "Jessica Williams",
      post: "Operations Manager, FinTech Innovations",
      para: "After their security audit, we patched critical vulnerabilities that could have cost millions in potential breaches."
    },
    {
      img: test4,
      name: "Alex Brown",
      post: "Senior Web Developer",
      para: "Their cloud migration expertise helped us reduce infrastructure costs by 40% while improving scalability."
    },
    {
      img: test5,
      name: "James Wilson",
      post: "Systems Architect",
      para: "The network optimization increased our data transfer speeds by 3x, significantly improving our remote team's productivity."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrowsl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
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
  }, [])

  return (
    <div id='testimonials' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themepurple text-xl font-semibold capitalize'>1300+ Customer reviews</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-[42px] leading-[50px] text-center capitalize'>Our Customer Love</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className='w-full mt-10 ' >
        <Slider className='w-full' {...settings}>
          {
            reviewdata.map((item, index) => (
              <div>
                <div key={index} className='w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3'>
                  <img src={item.img} alt='review-image' className='rounded-full w-[100px] m-auto' />
                  <div className='flex justify-center items-center gap-1'>
                    <FaStar className='text-themepurple ' />
                    <FaStar className='text-themepurple ' />
                    <FaStar className='text-themepurple ' />
                    <FaStar className='text-themepurple ' />
                    <FaStar className='text-themepurple ' />
                  </div>
                  <p className='text-center text-gray-500 text-lg'>{item.para}</p>
                  <div className='flex justify-center items-center gap-5 '>
                    <FaQuoteLeft className='fill-themepurple size-16' />
                    <div className='flex w-full flex-col justify-center items-start'>
                      <h1 className='text-black text-xl capitalize font-semibold'>{item.name}</h1>
                      <h1 className='text-gray-500 capitalize'>{item.post}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>

      </div>
    </div>
  )
}

export default Review