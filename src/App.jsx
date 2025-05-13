import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
// import { Analytics } from "@vercel/analytics/react"
<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      {/* <Analytics/> */}
    </div> 
  )
}

export default App