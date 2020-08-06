import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimesCircle,
  faFileUpload,
} from "@fortawesome/free-solid-svg-icons";

// Styles
import "../../assets/stylesheets/components/elements/result-card.scss";

class ResultCard extends Component {
  //   static defaultProps = { result: 20 };
  render() {
    const { result } = this.props;
    return (
      <div className="card shadow-sm border-0 p-5 result-card">
        {this.displayResult(result)}
      </div>
    );
  }

  displayResult = (result) => {
    if (!result) {
      return (
        <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faFileUpload} className="icon mr-3" />
          <h4>Upload documents to compare</h4>
        </div>
      );
    }

    if (result <= 20) {
      return (
        <div className="row">
          <div className="col-12">
            <div className="row d-flex justify-content-center mb-3">
              <FontAwesomeIcon icon={faCheck} className="icon green-text" />
            </div>
            <h2 className="text-center mb-3">Permissible similarity level</h2>
            <h4 className="text-center">
              <span className="icon green-text mr-2">{`${result}%`}</span>
              Similarity
            </h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-12">
            <div className="row d-flex justify-content-center mb-3">
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="icon text-danger"
              />
            </div>
            <h2 className="text-center mb-3">Plagiarism detected</h2>
            <h4 className="text-center">
              <span className="icon text-danger mr-2">{`${result}%`}</span>
              Similarity
            </h4>
          </div>
        </div>
      );
    }
  };
}

export default ResultCard;
