import React from 'react'
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