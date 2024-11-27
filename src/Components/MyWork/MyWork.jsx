import React from 'react'
import './MyWork.css'
import mywork_data from '../../Assets/MyWork.js'

const MyWork = () => {
  return ( 
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My latest Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return <img key={index} src={work.w_img} alt="Work" />
            })}
        </div>
        <div className="show-more">
          <p>Show more</p>
        </div>
    </div>
  )
}

export default MyWork;
