import React from 'react'
import './About.css'
import Vaths from '../../Assets/1000036428-removebg.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Vaths} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I am a passionate Computer Science Engineer with a deep focus on Artificial Intelligence (AI) and Machine Learning (ML). 
                    <br />Through my academic journey and hands-on projects, I’ve developed a strong foundation in designing intelligent systems,<br /> leveraging data, and building models that drive innovation and solve real-world problems.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%"}}/></div>
                    {/* <div className="about-skill"><p>Js</p><hr style={{width: "60%"}}/></div> */}
                    <div className="about-skill"><p>React Js</p><hr style={{width: "70%"}}/></div>
                    {/* <div className="about-skill"><p>Angular Js</p><hr style={{width: "40%"}}/></div>    */}
                    <div className="about-skill"><p>MySql</p><hr style={{width: "100%"}}/></div>   
                    <div className="about-skill"><p>Python</p><hr style={{width: "90%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "80%"}}/></div>
                    <div className="about-skill"><p>C/Cpp</p><hr style={{width: "40%"}}/></div>
                    <div className="about-skill"><p>UI/UX</p><hr style={{width: "80%"}}/></div>
                    {/* <div className="about-skill"><p>Figma</p><hr style={{width: "90%"}}/></div> */}
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>CERTIFICATIONS</p>
            </div>
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS</p>
            </div>
        </div>
    </div>
  )
}

export default About