import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/elements/NavBar";

// Styles
import "../assets/stylesheets/views/homepage.scss";

// Images
import plagiarismIcon from "../assets/images/plagiarism-icon.png";

const HomePage = () => {
  return (
    <div className="home-background">
      <NavBar />
      <div
        id="home-container"
        className="container d-flex align-items-center h-100"
      >
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                className="plagiarism-icon"
                src={plagiarismIcon}
                alt="Plagiarism icon"
              />
            </div>
            <h1 className="font-weight-bold banner-text text-center">
              Plagiarism Checker
            </h1>
            <nav className="d-flex justify-content-center center-navbar">
              <Link to="/signup" className="nav-link border-right">
                Sign up
              </Link>
              <Link to="/login" className="nav-link">
                Log in
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
