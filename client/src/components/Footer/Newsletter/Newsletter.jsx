import React from "react";
import "./Newsletter.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icon">
          <div className="icon">
            <FaFacebook size={25} color="#3b5998" />
          </div>
          <div className="icon">
            <FaTwitter size={25} color="#55acee" />
          </div>
          <div className="icon">
            <FaInstagram size={25} color="#F56040" />
          </div>
          <div className="icon">
            <FaLinkedin size={25} color="#007bb6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
