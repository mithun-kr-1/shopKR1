import { assets } from "../assets/assets";
import "../style/footer.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-about">
          <img src={assets.logo} className="footer-logo" alt="Logo" />
          <p className="footer-description">
          Welcome to KR Mart, your trusted online destination for quality, affordability, and convenience.
          At KR Mart, we believe shopping should be simple, secure, and satisfying.
          That’s why we’ve built a platform that brings together a wide range of products—from trendy fashion 
          and electronics to everyday essentials right to your fingertips.
          We are constantly expanding our catalog to bring you the latest trends and unbeatable deals. 
          Whether you’re shopping for yourself, your family, or gifts for your loved ones, KR Mart is here to serve with excellence.
          <br />
          <bold>Shop Smart. Shop Easy. Shop KR Mart.</bold>
          </p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">COMPANY</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>+91 00000-00000</li>
            <li>contactus@krmart.com</li>
            <li>123 KR Mart Street,</li>
            <li>City, State, 123456</li>
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p className="footer-copy">
          Copyright 2025 @krmart.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
