import React from "react";
import SideNav from "../components/elements/SideNav";
import Logs from "../components/containers/Logs";

// Styles
// import "../assets/stylesheets/views/homepage.scss";

const LogsPage = () => {
  return (
    <div>
      <SideNav />
      <div id="main">
        <Logs />
      </div>
    </div>
  );
};

export default LogsPage;
