import React from 'react'
import Navbar from '../components/NavBar'
import FeatureSection from '../components/FeatureSection'
import Pricing from '../components/Pricing'

import Footer from '../components/Footer'
import Testimonials from '../components/Testimonial'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
            <HeroSection />
            <FeatureSection />
            <Pricing />
            <Testimonials/>
    
    </>
  )
}

export default Home;