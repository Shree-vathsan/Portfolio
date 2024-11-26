import React from 'react'
import './Contact.css'
import Email_icon from '../../Assets/email.png'
import Contact_icon from '../../Assets/phone-call.png' 
import Location_icon from '../../Assets/placeholder.png'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "42cb1bd4-1bdd-4ec7-b14d-bfd01ea9d74e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Tell me about ypur project</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={Email_icon} alt="" height={30} width={30}/><p>shreevathsan1904@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={Contact_icon} alt="" height={30} width={30} /><p>7200016957</p>
                    </div>
                    <div className="contact-detail">
                        <img src={Location_icon} alt=""  height={30} width={30}/><p>Chennai,Tamilnadu</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type="submit" className='contact-submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Contact