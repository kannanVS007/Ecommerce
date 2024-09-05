import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsLetterBox'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
  <Hero/>
  <LatestCollection/>
  <BestSeller/>
  <OurPolicy/>
  <NewsletterBox/>
  
    </div>
  )
}

export default Home