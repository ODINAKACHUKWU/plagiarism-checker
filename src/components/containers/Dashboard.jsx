import React, { Component } from "react";
import SideNav from "../elements/SideNav";

// Styles
import "../../assets/stylesheets/components/containers/dashboard.scss";

class Dashboard extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <SideNav />
        <div id="main" className="dashboard-background">
          {children}
        </div>
      </div>
    );
  }
}

export default Dashboard;
