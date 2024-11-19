import React from "react";
import './Footer.css'; // Import CSS file for styling
import emailIcon from "../assets/Icons/email.png";
import phoneIcon from "../assets/Icons/phone-call.png";
import facebookIcon from "../assets/Icons/facebook.png";
import twitterIcon from "../assets/Icons/twitter.png";
import instagramIcon from "../assets/Icons/instagram.png";

const Footer = () => {
  return (
    <div id="footer" className="footer"> {/* Add id="footer" here */}
      <div className="Location">
        <h4>Location</h4>
        <p>Westland Business Park, 5th Floor</p>
      </div>
      <div className="Contact">
        <h4>Contacts</h4>
        <p><img src={phoneIcon} alt="Phone" />  +254-202-020-00</p>
        <p><img src={emailIcon} alt="Email" />   info@edusearch.com</p>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="https://www.twitter.com"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
      </div>
    </div>
  );
}

export default Footer;
