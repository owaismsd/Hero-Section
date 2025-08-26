import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Image is not working" />
          <span>XPLOREM</span>
        </div>
        <ul>
          <li className="nav-home-text">Home</li>
          <li>Product</li>
          <li>Travel</li>
          <li>About Us</li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
