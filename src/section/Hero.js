import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { FaRocket, FaShieldAlt, FaLaptopCode, FaHeadset } from 'react-icons/fa';

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: <FaRocket className="text-3xl text-themeyellow" />,
      title: "Fast & Reliable",
      description: "Lightning-fast solutions with 99.9% uptime guarantee"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-themeyellow" />,
      title: "Secure & Protected",
      description: "Enterprise-grade security for your business data"
    },
    {
      icon: <FaLaptopCode className="text-3xl text-themeyellow" />,
      title: "Custom Solutions",
      description: "Tailor-made development for your unique needs"
    },
    {
      icon: <FaHeadset className="text-3xl text-themeyellow" />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance whenever you need"
    }
  ];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
    });
    AOS.refresh();
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  // Particle animation config for background
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10
  }));

  return (
    <section id='hero' className="relative w-full min-h-[650px] md:min-h-[700px] lg:min-h-screen overflow-hidden bg-gradient-to-br from-themepurple via-purple-900 to-indigo-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/5"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out`
            }}
          ></div>
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-themepurple/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-16 md:py-24 lg:py-32">
        <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left content - Text and CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
              >
                <span className="text-themeyellow font-medium text-sm">IT Services & Software Solutions</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white"
              >
                Transform Your <span className="text-themeyellow">Business</span> With Modern IT Solutions
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0"
              >
                We deliver cutting-edge technology services and software development solutions 
                tailored to meet your organization's unique challenges and goals.
              </motion.p>
            </div>
            
            {/* Call-to-action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                to="contect" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="px-8 py-4 bg-themeyellow text-black rounded-xl font-semibold text-base hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Get Free Consultation
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Services
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 mt-10"
            >
              <div>
                <p className="text-themeyellow text-3xl md:text-4xl font-bold">100+</p>
                <p className="text-white/70 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-themeyellow text-3xl md:text-4xl font-bold">95%</p>
                <p className="text-white/70 text-sm">Success Rate</p>
              </div>
              <div>
                <p className="text-themeyellow text-3xl md:text-4xl font-bold">24/7</p>
                <p className="text-white/70 text-sm">Support</p>
              </div>
              <div>
                <p className="text-themeyellow text-3xl md:text-4xl font-bold">7+</p>
                <p className="text-white/70 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - Feature cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[400px] md:h-[450px]">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-themeyellow/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                
                <div className="p-8 h-full flex flex-col">
                  {/* Feature card header */}
                  <div className="mb-4">
                    <h3 className="text-white/90 text-lg font-medium">Why Choose Wooden Enterprise?</h3>
                  </div>
                  
                  {/* Feature indicators */}
                  <div className="flex space-x-2 mb-6">
                    {features.map((_, index) => (
                      <button 
                        key={index} 
                        className={`w-3 h-3 rounded-full ${index === currentFeature ? 'bg-themeyellow' : 'bg-white/30'}`}
                        onClick={() => setCurrentFeature(index)}
                      ></button>
                    ))}
                  </div>
                  
                  {/* Current feature card */}
                  <motion.div 
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex-1 flex flex-col justify-center"
                  >
                    <div className="p-4 bg-purple-900/50 rounded-full inline-block mb-4 w-fit">
                      {features[currentFeature].icon}
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-white/70">
                      {features[currentFeature].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add floating style for particles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(15px);
          }
          50% {
            transform: translateY(-25px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(-15px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

