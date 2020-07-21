import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <nav className="navbar navbar-light bg-info">
      <Link to="/" className="navbar-brand text-light">
        SHOPLY!
      </Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item pr-3">
          <span className="navbar-text text-light">
          </span>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link text-light">
            See Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
