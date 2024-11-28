import React from 'react'
import './HeroSection.css';
import Vathsan from '../../Assets/Vathsan.jpg';
const HeroSection = () => {
  return (
    <div id='home' className='hero'>
        <img src={Vathsan} alt="" height={350} width={275}/>
        <h1>Hi!, I'm <span>Shreevathsan</span></h1>
        <p>Driven Computer Science Engineering student eager to create impactful digital solutions, combining creativity, technical skills, and a love for coding.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default HeroSection