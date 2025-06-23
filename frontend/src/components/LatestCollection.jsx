import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";
import "../style/latestCollection.css";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="latest-collection-title">
      <div className="latest-collection-container">
  <div className="collection-image">
    <img
      src="https://img.freepik.com/premium-photo/desktop-computer-with-floating-holographic-icons-glowing-representation-digital-technology-wit_980716-763978.jpg?uid=R205225113&ga=GA1.1.415656737.1728362497&semt=ais_hybrid&w=740"
      alt="Collection Left"
    />
  </div>

  <div className="collection-center">
    <div className="collection-title">
      <Title text1={"ALL"} text2={"COLLECTION ITEMS"} />
    </div>
    <div className="collection-text">
      <p>
      Welcome to KR_mart's All Collections your one-stop destination for everything you need! 
      From trendy fashion and stylish accessories to smart electronics, home essentials, 
      and daily must-haves, we've handpicked the best just for you. 
      Enjoy top-quality products at unbeatable prices, all in one place. 
      At KR_mart, we bring you convenience, variety, and value making shopping smarter,
      faster, and more delightful than ever before.
      </p>
    </div>
  </div>

  <div className="collection-image mirrored">
  <img
    src="https://img.freepik.com/premium-photo/desktop-computer-with-floating-holographic-icons-glowing-representation-digital-technology-wit_980716-763978.jpg?uid=R205225113&ga=GA1.1.415656737.1728362497&semt=ais_hybrid&w=740"
    alt="Collection Right"
  />
</div>
</div>

      <div className="latest-products-grid">
        {latestProducts.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            className={index === 0 ? "highlight0" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
