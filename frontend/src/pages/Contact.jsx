import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="contact-content">
      <img src={assets.mart} className="contact-image" alt="Contact Image" />
        <div className="contact-details">
          <p className="contact-title">Our Store</p>
          <p className="contact-text">
            21st Cross Kuvempu Nagar <br />
            Vijayanagar <br />
            Bengaluru - 751024
          </p>
          <p className="contact-text">
            Tel: +91 00000 00000 <br />
            Fax: +91 00000 00000 <br />
            Email: contactus@krmart.com
          </p>
<button
  className="contact-button"
  onClick={() => window.open("https://maps.app.goo.gl/j5pHWieWQr8KARjz6")}
>
  Get Location
</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
