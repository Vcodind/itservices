import React from 'react';
import ourtame from "../assets/ourtame.jpg";

const About = () => {
  return (
    <section id='about' className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Wooden Enterprise is a rising IT company committed to providing high-quality app development, 
          live server deployment, and project maintenance services. Founded by dynamic young entrepreneurs, 
          we are driven by a passion for innovation and excellence.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-600">
            To empower businesses with reliable, innovative, and scalable digital solutions that drive real-world success.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            We specialize in designing and developing customized mobile and web applications that are built to perform at scale. 
            Our expert team also ensures seamless live server management and long-term technical maintenance to keep your projects running flawlessly after launch.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            At Wooden Enterprise, we don't just deliver technology — we build strong partnerships with our clients, 
            working closely with them to understand their needs and support their growth through tailored IT solutions. 
            Whether you are a startup, SME, or enterprise, we bring deep technical expertise, fast delivery, and ongoing support to every project.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img 
            src={ourtame}
            alt="Our Team" 
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>

      <div className="mt-16 bg-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Our Values</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <svg className="h-12 w-12 text-themepurple mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4l3 3M12 15l-3-3V9m0 6v.01M12 3v3M9 5l3 3L6 9M9 5L6 6l3-3" />
              </svg>
              <h4 className="text-xl font-semibold text-gray-100">Innovation</h4>
              <p className="text-lg text-gray-300">We constantly push the boundaries of technology to deliver innovative solutions.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="h-12 w-12 text-themepurple mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5V3m0 0l-3 3m3-3l3 3m0 16v2m0 0l-3-3m3 3l3-3" />
              </svg>
              <h4 className="text-xl font-semibold text-gray-100">Integrity</h4>
              <p className="text-lg text-gray-300">We maintain the highest level of integrity in every interaction and decision.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="h-12 w-12 text-themepurple mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l2 2m0 0l2-2h2M12 7l-2 2-2-2m0 0v5" />
              </svg>
              <h4 className="text-xl font-semibold text-gray-100">Collaboration</h4>
              <p className="text-lg text-gray-300">We believe in the power of collaboration, both within our team and with our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
