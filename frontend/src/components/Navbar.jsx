import "../style/navbar.css"
import { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
    setCartItems({});
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-search">
      <ul className="navbar-links">
        <NavLink className="navbar-link-item" to="/">
          <p>
            <img src="https://cdn-icons-png.flaticon.com/128/619/619153.png" alt="Home" className="icon" /> &nbsp;
            HOME</p>
          <hr className="navbar-underline" />
        </NavLink>
        <NavLink className="navbar-link-item" to="/collection">
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/8209/8209931.png" alt="Collections" className="icon" /> &nbsp;
            COLLECTIONS</p>
          <hr className="navbar-underline" />
        </NavLink>
        <NavLink className="navbar-link-item" to="/about">
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/3357/3357490.png" alt="About" className="icon" /> &nbsp;
            ABOUT</p>
          <hr className="navbar-underline" />
        </NavLink>
        <NavLink className="navbar-link-item" to="/contact">
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/15863/15863094.png" alt="Contact" className="icon" /> &nbsp;
            CONTACT</p>
          <hr className="navbar-underline" />
        </NavLink>
      </ul>
      </div>
      <div className="navbar-icons">

        <div className="profile-dropdown">
          <img
            src="https://cdn-icons-png.flaticon.com/128/552/552721.png"
            alt="Profile"
            className="icon"
            onClick={() => (token ? null : navigate("/login"))}
          />
          {token && (
            <div className="dropdown-menu">
              <p className="dropdown-item" onClick={() => navigate("/MyProfile")}>
                My Profile</p>
              <p className="dropdown-item" onClick={() => navigate("/orders")}>
                Orders
              </p>
              <p className="dropdown-item" onClick={logout}>
                Logout
              </p>
            </div>
          )}
        </div>

        <Link to="/cart" className="cart-icon">
          <img src="https://cdn-icons-gif.flaticon.com/15712/15712867.gif" alt="Cart" className="icon" />
          <p className="cart-count">{getCartCount()}</p>
        </Link>

      </div>

      <div className={`mobile-sidebar ${visible ? "visible" : ""}`}>
        <div className="mobile-sidebar-menu">
          <div className="mobile-sidebar-back" onClick={() => setVisible(false)}>
            <img src={assets.dropdown_icon} alt="Back" className="back-icon" />
            <p>Back</p>
          </div>
          {["/", "/collection", "/about", "/contact"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className="mobile-sidebar-link"
              onClick={() => setVisible(false)}
            >
              <p>{["Home", "Collection", "About", "Contact"][idx]}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

