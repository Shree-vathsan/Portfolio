import React from 'react';
import './Services.css';
import Services_Data from '../../Assets/services_data.js';
import arrow_icon from '../../Assets/arrow_icon.svg';
<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src="" alt="" />
      </div>
      <div className="service-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className='service-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
