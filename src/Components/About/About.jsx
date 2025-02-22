import React from 'react';
import './About.css';
import Vaths from '../../Assets/SV1.png';
<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Vaths} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Computer Science Engineer with a deep focus on Artificial Intelligence (AI) and Machine Learning (ML).
              Through my academic journey and hands-on projects, I’ve developed a strong foundation in designing intelligent systems,
              leveraging data, and building models that drive innovation and solve real-world problems.
            </p>
          </div>
          <div className="about-skills">
            {[
              'HTML & CSS',
              'JavaScript',
              'React Js',
              'Angular',
              'Spring',
              'MySql',
              'Python',
              'Java',
              'C/Cpp',
              'Figma',
              'UI/UX',
              'Git, Github',
            ].map(skill => (
              <div className="about-skill" key={skill}>
                <p>{skill}</p>
              </div>
            ))}
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
  );
};

export default About;
