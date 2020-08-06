import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHistory,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

// Styles
import "../../assets/stylesheets/components/elements/side-nav.scss";
import openHamburger from "../../assets/images/hamburger.svg";
import closeHamburger from "../../assets/images/hamburger-2.svg";

class SideNav extends Component {
  componentDidMount() {
    const page = this.getPage();
    const link = document.getElementById(`${page}`);
    link.classList.add("active");
  }

  handleOpenNav = (event) => {
    event.preventDefault();
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
    document.getElementById("logo-text").style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
  };

  handleCloseNav = (event) => {
    event.preventDefault();
    document.getElementById("sideNav").style.width = "70px";
    document.getElementById("open-btn").style.display = "block";
    document.getElementById("logo-text").style.display = "none";
    document.getElementById("close-btn").style.display = "none";
    document.body.style.backgroundColor = "#F1F3F9";
  };

  handleLogout = () => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <nav id="sideNav" className="sidenav shadow-sm pt-4">
        <div className="nav-link d-flex mb-4">
          <Link
            to="#"
            id="open-btn"
            className="mb-3"
            onClick={this.handleOpenNav}
          >
            <img src={openHamburger} width="20" alt="Open hamburger" />
          </Link>
          <h1 id="logo-text" className="font-weight-bold title">
            CHECKER
          </h1>
          <Link
            to="#"
            id="close-btn"
            className="closebtn"
            onClick={this.handleCloseNav}
          >
            <img src={closeHamburger} width="20" alt="Close hamburger" />
          </Link>
        </div>
        <Link
          id="dashboard"
          to="/dashboard"
          className="nav-link d-flex text-dark mb-3"
        >
          <FontAwesomeIcon icon={faHome} className="mr-5 icon" />
          Home
        </Link>
        <Link id="logs" to="/logs" className="nav-link d-flex text-dark mb-3">
          <FontAwesomeIcon icon={faHistory} className="mr-5 icon" />
          History
        </Link>
        <Link
          to="/"
          className="nav-link d-flex text-dark"
          onClick={this.handleLogout}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-5 icon" />
          Logout
        </Link>
      </nav>
    );
  }

  getPage = () => {
    const urlDetails = window.location.pathname.split("/");
    return urlDetails[urlDetails.length - 1];
  };
}

export default SideNav;
