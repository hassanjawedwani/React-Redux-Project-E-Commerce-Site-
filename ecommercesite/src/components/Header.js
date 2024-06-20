import { NavLink } from 'react-router-dom';
import './Header.css'
import React from 'react';


const Header = () => {
  return (
    <div style={{backgroundColor: "#383838", color: "white"}}>
      <ul id="navbar">
        <li><NavLink to="/addproduct"  className="navlink">Add Product</NavLink></li>
        <li><NavLink to="/updateproduct" className="navlink">Update Product</NavLink></li>
        <li><NavLink to="/login" className="navlink">Login</NavLink></li>
        <li><NavLink to="/register" className="navlink">Register</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;  