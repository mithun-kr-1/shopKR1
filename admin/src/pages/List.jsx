import React, { useEffect, useState } from "react";
import axios from "axios";
import { backEndURL, currency } from "../App";
import { toast } from "react-toastify";
import "../styles/list.css";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backEndURL + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backEndURL + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  
  return (
    <div className="list-wrapper">
      <p className="list-title">All Products List</p>
      <div className="list-table">
        {/* Table Header */}
        <div className="list-header">
          <strong>Image</strong>
          <strong>Name</strong>
          <strong>Category</strong>
          <strong>Price</strong>
          <strong className="list-actions-title">Actions</strong>
        </div>
        {list.map((item, index) => (
          <div className="list-row" key={index}>
            <img src={item.image[0]} alt="product" className="list-image" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p
              className="list-remove"
              onClick={() => removeProduct(item._id)}
            >
              ❌
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
