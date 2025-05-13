import React from "react";
import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>

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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Contact Info</h1>
          {/* <p>Tell me about your proje</p> */}
          <div className="contact-details">
            <div className="contact-detail">
              <span className="material-icons"><EmailIcon /></span>
              <p>shreevathsan1904@gmail.com</p>
            </div>
            <div className="contact-detail">
              <span className="material-icons"><CallIcon/></span>
              <p>7200016957</p>
            </div>
            <div className="contact-detail">
              <span className="material-icons"><LocationOnIcon/></span>
              <p>Chennai, Tamilnadu</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default Contact;
