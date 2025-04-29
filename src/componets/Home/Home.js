import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Category from '../../section/Category'
import Hero from "../../section/Hero"
import Type from "../../section/Type"
import Services from "../../section/Services"
import WhyChoose from '../../section/Whychoose';
import Banner from '../../section/Banner';
import Review from "../../section/Review"
import Price from '../../section/Price';
import About from '../../section/Aboutus'
import Faq from "../../section/Faq"
import Contact from "../../section/Contact"

const Home = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we have a section to scroll to from navigation state
    if (location.state && location.state.scrollTo) {
      const section = location.state.scrollTo;
      
      // Small delay to ensure all components are rendered
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: true,
          offset: -100,
        });
      }, 100);
      
      // Clear the state to prevent scrolling on page refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Category />
      <Type />
      <Services />
      <WhyChoose />
      <About />
      <Banner />
      <Review />
      <Price />
      <Faq />
      <Contact/>
    </>
  )
}

export default Home