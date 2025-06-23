import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";
import "../style/bestSeller.css"; 

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="bestseller-container">
      <div className="bestseller-header">
        <Title text1={"BEST"} text2={"SELLER PRODUCTS"} />
        <div className="bestseller-headerr">
        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Best Seller Icon" className="bestseller-icon" >
        </img>
        </div>
      </div>
      <div className="bestseller-description">
        <p className="bestseller-description">
        🔥 Discover our Best Sellers the most-loved, 
        top-rated products flying off the shelves, 
        trusted by thousands of happy customers at KR_mart!
        <br />
        Explore our Best Seller Products the most-loved, 
        top-rated products that KRmart customers can’t get enough of!
        From trending fashion and must-have gadgets to everyday essentials,
        we have these items are flying off the shelves for a reason. 
        Tried, tested, and trusted by thousands, each product in this collection delivers quality, 
        value, and satisfaction. Whether you're shopping for yourself or searching for the perfect gift, 
        our bestsellers offer something for everyone. Hurry with limited stock and high demand, 
        now’s the time to grab the favorites everyone’s talking about!
        </p>
      </div>
      <div className="bestseller-grid">
        {bestSeller.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
