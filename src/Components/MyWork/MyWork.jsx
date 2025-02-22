import React from 'react';
import './MyWork.css';
import mywork_data from '../../Assets/MyWork.js';
<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="work-item" key={index}>
              <img src={work.w_img} alt="Work" />
              <div className="work-overlay">
                <p>{work.w_name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="show-more">
        <p>Show more</p>
      </button>
    </div>
  );
};

export default MyWork;