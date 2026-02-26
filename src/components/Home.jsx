// import './App.css'
import React, { useState, useEffect } from "react";

import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import ServiceCards from './serviceCards/ServiceCards'
import Explore from "./Explore/ProjectsExplore";
import Footer from "./footer/Footer";


function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <HeroSection/>
    <ServiceCards/>
    <Explore/>
    <Footer/>
    </div>  
  )
}

export default Home
