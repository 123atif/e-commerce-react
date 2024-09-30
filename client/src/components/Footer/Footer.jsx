import "./Footer.scss";
import { CiLocationOn, CiMobile4 } from "react-icons/ci";
import { FaEnvelopeOpen } from "react-icons/fa";
import payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="col">
            <div className="title">Contact </div>
            <div className="c-item">
              <CiLocationOn />
              <div className="text"> New York - 101010 Hudson </div>
            </div>
            <div className="c-item">
              <CiMobile4 />
              <div className="text"> Phone: +1 123-456-789 </div>
            </div>
            <div className="c-item">
              <FaEnvelopeOpen />
              <div className="text"> Email: 6YpCt@example.com </div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="text"> HeadPhones</span>
            <span className="text"> Smart Watches</span>
            <span className="text"> Bluetooth Speaker</span>
            <span className="text"> Wireless Earbuds</span>
            <span className="text"> Home Threatre</span>
            <span className="text"> Projector</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text"> Home</span>
            <span className="text"> About</span>
            <span className="text"> Returns</span>
            <span className="text"> Privacy Policy</span>
            <span className="text"> Term & Conditions</span>
            <span className="text"> Contact Us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-context">
            <div className="text">
              Copyright ©204 All rights reserved | This template is made with
              <span className="heart"> ♥</span> by Atif
            </div>
            <img src={payment} alt="payment" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
