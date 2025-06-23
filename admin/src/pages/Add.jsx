import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backEndURL } from "../App";
import { toast } from "react-toastify";
import "../styles/add.css";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [loader, setLoader] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backEndURL + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setBestseller("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setCategory("Men");
        setSubCategory("Topwear");
        setPrice("");
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoader(false);
    }
  };

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form className="add-form" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <p>Upload Image</p>
        <div className="image-upload-container">
          {[image1, image2, image3, image4].map((img, idx) => (
            <label key={idx} htmlFor={`image${idx + 1}`}>
              <img
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                className="upload-image"
                alt="upload"
              />
              <input
                onChange={(e) => {
                  const setter = [setImage1, setImage2, setImage3, setImage4][
                    idx
                  ];
                  setter(e.target.files[0]);
                }}
                type="file"
                id={`image${idx + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <p>Product Name</p>
        <input
          type="text"
          placeholder="Type Here"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <p>Product Description</p>
        <textarea
          placeholder="Write Content Here..."
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <div>
          <p>Product Category</p>
          <select
            className="form-input"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="select  One"></option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p>Sub Category</p>
          <select
            className="form-input"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="select  One"></option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p>Product Price</p>
          <input
            className="form-input"
            type="number"
            placeholder="25"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>

      <div className="form-group">
        <p>Product Sizes</p>
        <div className="size-options">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <p
              key={size}
              className={`size-option ${
                sizes.includes(size) ? "selected" : ""
              }`}
              onClick={() => toggleSize(size)}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      <div className="form-group checkbox">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type="submit" className="submit-button" disabled={loader}>
        {loader ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default Add;