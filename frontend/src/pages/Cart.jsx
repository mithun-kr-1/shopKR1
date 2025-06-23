import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";
import "../style/cart.css";
import BestSeller from "../components/BestSeller";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, token } =
  useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [proceedToPayment, setProceedToPayment] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
      setProceedToPayment(tempData.length > 0);
    }
  }, [cartItems, products]);

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1={"CARTED"} text2={"ITEMS"} />
      </div>

      <div className="cart-items">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div key={index} className="cart-item">
              <div className="item-details">
                <img
                  src={productData.image[0]}
                  alt={productData.name}
                  className="item-image"
                />
                <div>
                  <p className="item-name">{productData.name}</p>
                  <div className="item-meta">
                    <p>{currency}{productData.price}</p>
                    <p className="item-size">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="item-qty"
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                      item._id,
                      item.size,
                      Number(e.target.value)
                    )
                }
              />

              <img
                src={assets.bin_icon}
                alt="Delete"
                className="delete-icon"
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>

      <div className="cart-footer">
        <div className="cart-total-wrapper">
          <CartTotal />
          <div className="checkout-btn-wrapper">
            <button
              className="checkout-btn"
              onClick={() =>
                !proceedToPayment
                  ? toast.error("Add Items to cart")
                  : navigate("/place-order")
              }
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <div className="missed-collection">
      <Title text1={"COLLECTIONS YOU "} text2={"MISSED !!!!! Shop Again"} />
            <BestSeller />
      </div>
    </div>
  );
};

export default Cart;
