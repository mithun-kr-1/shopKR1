import { useContext, useState } from "react";
import "../style/newsLetter.css";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const NewsLetterBox = () => {
const [email, setEmail] = useState("");
const {backendUrl,navigate} = useContext(ShopContext);
const onSubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token"); // Check login
    if (!token) {
      toast.error("Please log in to subscribe.");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        backendUrl + "/api/sendemail",
        { email },
        {
          headers: {
            token, 
          },
        }
      );

      if (res.data.success) {
        toast.success("Subscribed successfully. Check Email for Coupon");
      } else {
        toast.error(res.data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Subscription failed. Try again later.");
      console.error("Subscription error:", error);
    }
    
  };


  return (
    <div className="newsletter-box">
      <p className="newsletter-title">Subscribe Now get 20% off</p>
      <p className="newsletter-subtitle">
      Don’t miss out! Subscribe now to KRmart and instantly unlock 20% off on your first purchase. 
      Be the first to know about exclusive deals, latest arrivals, flash sales, and special member-only discounts. 
      Join our shopping community today and start saving on the products you love. 
      It’s quick, easy, and totally worth it because smart shoppers subscribe!
      </p>
      <form className="newsletter-form" onSubmit={onSubmitHandler}>
        <input
          type="email"
          placeholder="Enter Your Email."
          className="newsletter-input"
          onChange={(e) => (setEmail(e.target.value))}
          required
        />
        <button type="submit" className="newsletter-button">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
