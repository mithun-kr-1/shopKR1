import { assets } from "../assets/assets";
import "../style/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      
      <div className="hero-text-container">
        <div className="hero-text-content">
          <div className="hero-top-row">
           
            
          </div>
          
          <div className="hero-bottom-row">
            <p className="hero-shop-text">
              KR Mart Your Style, Your Store!
              <br /><br/>
              Shop Smart, Shop KR Mart!
              <br /> <br/>
              Everything You Need,<br/> Delivered With Care.
              <br /> <br/>
              Trendy Choices. <br/>Trusted Quality.<br/> Only at KR Mart.
              <br /><br/>
              From Daily Essentials, <br/> To Style Statements.
              <br /><br/> 
              KR Mart Has It All</p>
            
          </div>
        </div>
      </div>

      <img src={assets.hero_img} alt="Hero" className="hero-image" />
    </div>
  );
};

export default Hero;
