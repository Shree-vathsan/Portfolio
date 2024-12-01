import React from 'react'
import './Footer.css'
import User from '../../Assets/user.png'

const Footer = () => {
  return (
    <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>SV</h1>
                    {/* <p>Hi,Im Shreevathsan pursuing CSE(AIML) at CIT Chennai....</p> */}
                </div>
                {/* <div className="footer-top-right"> */}
                    {/* <div className="footer-email-input">
                        <img src={User} alt="" height={18} width={15}/>
                        <input type="emial" placeholder='Enter Your Email' />
                    </div> */}
                {/* </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <p id="footer-bottom-left">© 2024 Shreevathsan R. All right reserved</p>
                <div id="footer-bottom-right">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect</p>
                </div>
            </div>
    </div>
  )
}

export default Footer