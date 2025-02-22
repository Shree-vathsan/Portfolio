import React from 'react'
import './Footer.css'
// import User from '../../Assets/user.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>


const Footer = () => {
  return (
    <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>SV</h1>
                    
                    {/* <p>Hi,Im Shreevathsan pursuing CSE(AIML) at CIT Chennai....</p> */}
                </div>
                <div className="footer-top-right">
                    <a
                        href="https://github.com/Shree-vathsan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    >
                        <GitHubIcon style={{ color: "#000000" }}/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shreevathsan-r-91183625b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon"
                    >
                        <LinkedInIcon style={{ color: "#000000" }}/>
                    </a>
                    <a
                        href="mailto:shreevathsan1904@gmail.com"
                        className="footer-icon"
                    >
                        <EmailIcon style={{ color: "#000000" }}/>
                    </a>

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