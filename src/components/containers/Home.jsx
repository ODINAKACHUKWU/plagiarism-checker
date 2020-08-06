import React, { Component } from "react";
import Dashboard from "./Dashboard";
import ComparismForm from "./ComparismForm";

// Styles
import "../../assets/stylesheets/components/containers/home.scss";

class Home extends Component {
  render() {
    return (
      <Dashboard>
        <div className="container p-5">
          <h2 className="text-center text-white mt-4 mb-5">
            Compare two documents for duplicate content
          </h2>
          <div className="row">
            <div className="col-12">
              <ComparismForm />
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default Home;
