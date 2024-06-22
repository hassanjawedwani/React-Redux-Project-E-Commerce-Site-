import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import './Header.css'
import React from 'react';


const Header = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();
  console.log(user)
  return (
      <div id="navbarContainer" style={{backgroundColor: "#383838", color: "white"}}>
        <ul id="navbar">
          {
            localStorage.getItem('userInfo') 
            ? 
            <>
              <li><NavLink to="/addproduct"  className="navlink">Add Product</NavLink></li>
              <li><NavLink to="/updateproduct" className="navlink">Update Product</NavLink></li>
              <li><NavLink to="/search" className="navlink">Search</NavLink></li>
            </>
            :
            <>
              <li><NavLink to="/login" className="navlink">Login</NavLink></li>
              <li><NavLink to="/register" className="navlink">Register</NavLink></li>
            </>
          }
        </ul>
        {
          localStorage.getItem('userInfo') &&
          <span id="profile">
          <label>{user.email}</label>
          <button onClick={() => {localStorage.removeItem('userInfo');
            navigate('/register');
          }}>Logout</button>
          </span>
        }
       
      </div>
  );
};

export default Header;  