import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";
import "../style/about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="about-section">
        <img
          src={assets.about_img}
          alt="About"
          className="about-image"
        />
        <div className="about-content">
          <p>
          Welcome to KR Mart, your trusted and innovative e-commerce destination, where convenience meets quality. 
          We are proud to serve as your one-stop online shop for a wide variety of products including daily 
          essentials, electronics, fashion, home items, and much more. KR Mart was founded with a clear vision:
           to make shopping not only accessible and affordable but also enjoyable for everyone. 
           With an easy-to-navigate platform, we offer a seamless digital shopping experience that caters to both 
           urban and rural customers across India. Our commitment to excellence ensures that every product listed 
           on our platform is sourced from reliable brands and trusted vendors, undergoing strict quality checks 
           before reaching your doorstep. We are dedicated to delivering value, providing secure payment options, 
           lightning-fast delivery services, and an exceptional customer support team that is available 
           24/7 to assist you with anything you need. At KR Mart, customer satisfaction isn’t just a goal
           it’s the core of everything we do.<br /><br /> 
          At KR Mart, we believe in empowering people through technology, innovation, and trust.
           We are more than just a marketplace; we are a growing digital ecosystem that supports small businesses, 
           promotes sustainable practices, and puts customer happiness first. We continuously strive to expand our 
           product offerings, embrace new technologies, and enhance our services to provide an experience that goes
            beyond ordinary shopping. Whether you're shopping for yourself, looking for thoughtful gifts, or 
            managing bulk purchases, KR Mart ensures a smooth and hassle-free journey from click to delivery. 
            Our responsive mobile-friendly design, personalized recommendations, seasonal deals, and customer 
            loyalty programs are crafted to add extra value to your shopping experience. By choosing 
            KR Mart, you're not only opting for convenience and quality you're becoming part of a community that 
            values integrity, innovation, and connection. Thank you for making us a part of your daily life, and 
            we look forward to continuing to serve you with dedication and care — because at KR Mart, every 
            customer matters and every order is special.
            </p>
          <strong className="about-subheading">Our Goal</strong>
          <p>
          At KR Mart, our goal is to make online shopping simple, secure, and accessible for everyone.
          We aim to deliver quality products at fair prices with fast and reliable service.
          Empowering local sellers and promoting sustainable choices is at the heart of our mission.
          We strive to create a shopping experience that’s smart, satisfying, and customer-first.
          </p>
        </div>
      </div>

      <div className="about-why-header">
        <Title text1={"WHY"} text2={"US"} />
      </div>

      <div className="about-why-section">
        <div className="why-card">
          <strong>Quality Assurance:</strong>
          <p>
          Every product on KR Mart goes through a strict quality check before it reaches you.
          We partner only with verified suppliers and trusted brands.
          Your satisfaction drives our commitment to delivering the best.
          </p>
        </div>
        <div className="why-card">
          <strong>Trust:</strong>
          <p>
          Trust is the foundation of everything we do at KR Mart.
          We ensure transparent pricing, secure payments, and timely delivery.
          Our platform is built to protect your data and your confidence.
          </p>
        </div>
        <div className="why-card">
          <strong>Customer Service:</strong>
          <p>
          Our customer support team is here for you 24/7 friendly, responsive, and reliable.
          We handle every query with care, urgency, and respect.
          At KR Mart, your happiness is our top priority, always.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
