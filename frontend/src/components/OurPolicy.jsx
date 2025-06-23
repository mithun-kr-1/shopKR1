import { assets } from "../assets/assets";
import "../style/ourPolicy.css";

const OurPolicy = () => {
  return (
    <div className="our-policy-container">
      <div className="policy-item">
        <img src="https://cdn-icons-gif.flaticon.com/15713/15713077.gif" alt="Exchange Icon" className="policy-icon" />
        <p className="policy-title">Easy Exchange Policy</p>
        <p className="policy-desc">We Offer free exchange policy.</p>
      </div>
      <div className="policy-item">
        <img src="https://cdn-icons-png.flaticon.com/128/11582/11582823.png" alt="Return Icon" className="policy-icon" />
        <p className="policy-title">7 Days Return Policy</p>
        <p className="policy-desc">We give 7 days free return policy.</p>
      </div>
      <div className="policy-item">
        <img src="https://cdn-icons-gif.flaticon.com/17569/17569466.gif" alt="Support Icon" className="policy-icon" />
        <p className="policy-title">Customer Support</p>
        <p className="policy-desc">We give 24/7 customer support.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
