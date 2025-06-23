import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import "../style/product.css";
import Loading from "../components/Loading";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className="product-container">
      <div className="product-main">
        <div className="product-images">
          <div className="thumbnail-list">
            {productData?.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                className="thumbnail-image"
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={image} alt="" className="main-product-img" />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-name">{productData.name}</h1>
          <div className="product-rating">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="star-icon" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="star-icon" />
            <p className="rating-count">5 Star Ratings</p>
          </div>
          <p className="product-price">
            {currency}
            {productData.price}
          </p>
          <p className="product-description">{productData.description}</p>

          <div className="size-selection">
            <p>Select Size</p>
            <div className="size-options">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`size-button ${item === size ? "active" : ""}`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            className="add-to-cart-button"
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>

          <hr className="separator" />
          <div className="product-features">
            <p>100% Original Products</p>
            <p>Cash On Delivery is available for all orders</p>
            <p>Easy Return and Replacement within 7 days also available</p>
          </div>
        </div>
      </div>

      <div className="product-details-section">
        <div className="tab-switch">
          <p className="tab-active">Description </p><b/>
          <p className="tab-inactive">Reviews</p>
        </div>
        <div className="description-text">
          <p>
            <p>{productData.description}</p><br/>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet...
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices...
          </p>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div> {<Loading />}</div>
  );
};

export default Product;