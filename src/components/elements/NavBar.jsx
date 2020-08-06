import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../../assets/stylesheets/components/elements/navbar.scss";

const Navbar = () => {
  return (
    <div className="container d-flex justify-content-end">
      <nav className="navbar navbar-expand-lg">
        <div id="top-navbar">
          <ul className="navbar-nav">
            <li className="nav-item mr-4">
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
