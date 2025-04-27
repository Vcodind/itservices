import React, { useEffect } from 'react'
import AOS from "aos";

const Insta = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, [])

  return (
    <div id='contect' className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
      
      {/* Contact Us Section */}
      <div data-aos="fade-up" data-aos-delay="400" className='mt-20 text-center'>
        <h2 className='text-themepurple text-2xl font-semibold capitalize'>Contact Us</h2>
        <p className='text-black text-lg mt-4 mb-8'>
          We would love to hear from you! If you have any questions or need assistance, feel free to reach out.
        </p>
        <form className='w-full max-w-lg mx-auto'>
          <div className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-themepurple'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-themepurple'
            />
            <textarea
              placeholder='Your Message'
              rows='4'
              className='p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-themepurple'
            ></textarea>
            <button type='submit' className='bg-themepurple hover:bg-themeyellow text-white font-semibold px-8 py-3 rounded-lg'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Insta;
