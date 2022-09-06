import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperty from '../../components/featuredProperties/FeaturedProperty'
import Mail from '../../components/mailSubscription/Mail'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="home__container">
        <h1 className='home__title'>Explore Indian Cities</h1>
        <p className='home__title__description'>These popular destinations have lot to offer</p>
        <Featured/>
        <h1 className='home__title'>Browse property list by name</h1>
        <PropertyList/>
        <h1 className='home__title'>Homes guest loves most</h1>
        <FeaturedProperty/>
        <Mail/>
        <Footer/>
        <p>Copyright © 1996–2022 Saddam Booking™. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Home