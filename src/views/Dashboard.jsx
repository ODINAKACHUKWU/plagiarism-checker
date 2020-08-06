import React from "react";
import SideNav from "../components/elements/SideNav";
import Home from "../components/containers/Home";

// Styles
// import "../assets/stylesheets/views/homepage.scss";

const Dashboard = () => {
  return (
    <div>
      <SideNav />
      <div id="main">
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
