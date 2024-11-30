import React from 'react';
import './HeroSection.css';
import Vathsan from '../../Assets/Vathsan.jpg';


const HeroSection = () => {
  return (
    <div id='home' className='hero'>
        <img src={Vathsan} alt="" height={350} width={275}/>
        <p>Hi!, I'm<span> Shreevathsan</span></p>
        <p>Driven Computer Science Engineering student eager to create impactful digital solutions, combining creativity, technical skills, and a love for coding.</p>
        <div className="hero-action">
            <a href="https://www.linkedin.com/in/shreevathsan-r-91183625b/" target="_blank" rel="noopener noreferrer" className="hero-connect">
                Connect with me
            </a>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  );
}

export default HeroSection;
