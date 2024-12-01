import React from 'react';
import './MyWork.css';
import mywork_data from '../../Assets/MyWork.js';

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