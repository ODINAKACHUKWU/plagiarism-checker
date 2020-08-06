import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import compareRequest from "../../actions/creators/comparismActions";
import ResultCard from "../elements/ResultCard";
import error from "../../helpers/error";

// Styles
import "../../assets/stylesheets/components/containers/comparism-form.scss";

class ComparismForm extends Component {
  state = {
    documentsData: {
      nameOne: "",
      nameTwo: "",
      fileOne: "",
      fileTwo: "",
    },
  };

  handleChange = (event) => {
    const { id, value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      documentsData: {
        ...prevState.documentsData,
        [id]: value,
      },
    }));
  };

  handleFileChosen = (event) => {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    const id = event.target.id;

    fileReader.readAsText(file);
    fileReader.onloadend = () => {
      const content = fileReader.result;
      this.setState((prevState) => ({
        ...prevState,
        documentsData: {
          ...prevState.documentsData,
          [id]: content,
        },
      }));
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { documentsData } = this.state;
    const isValid = this.isValid(documentsData);

    if (isValid) {
      const { compareDocuments } = this.props;
      compareDocuments(documentsData);
    } else {
      error.displayError("Please provide all inputs");
    }
  };

  handleOnFocus = (event) => {
    event.preventDefault();
    error.hideError();
  };

  render() {
    const { comparing, result, error } = this.props;

    return (
      <div>
        <div className="card shadow-sm border-0 p-5 mb-3">
          <div className="card-title">
            <form onSubmit={this.handleSubmit}>
              <div>
                <h4 className="font-weight-bold">First document</h4>
                <div className="dropdown-divider mt-4 mb-4"></div>
                <div className="form-group">
                  <label>Document owner</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameOne"
                    placeholder="Name of the document's owner"
                    onChange={this.handleChange}
                    onFocus={this.handleOnFocus}
                  />
                </div>
                <div className="form-group">
                  <label>Upload file (.txt)</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="fileOne"
                    accept="text/plain"
                    onChange={this.handleFileChosen}
                    onFocus={this.handleOnFocus}
                  />
                </div>
              </div>
              <div className="border-top mt-5">
                <h4 className="font-weight-bold pt-4">Second document</h4>
                <div className="dropdown-divider mt-4 mb-4"></div>
                <div className="form-group">
                  <label>Document owner</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameTwo"
                    placeholder="Name of the document's owner"
                    onChange={this.handleChange}
                    onFocus={this.handleOnFocus}
                  />
                </div>
                <div className="form-group">
                  <label>Upload file (.txt)</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="fileTwo"
                    accept="text/plain"
                    onChange={this.handleFileChosen}
                    onFocus={this.handleOnFocus}
                  />
                </div>
              </div>
              <div id="error"></div>
              {error ? (
                <div className="alert alert-danger text-center">{error}</div>
              ) : (
                ""
              )}
              <button type="submit" className="btn btn-blue mt-3">
                {comparing ? (
                  <div>
                    <MDSpinner />
                    <span className="ml-2">Compare</span>
                  </div>
                ) : (
                  "Compare"
                )}
              </button>
            </form>
          </div>
        </div>
        <ResultCard result={result.value} />
      </div>
    );
  }

  isValid = (data) => {
    const { nameOne, nameTwo, fileOne, fileTwo } = data;
    if (
      nameOne.trim().length !== 0 &&
      nameTwo.trim().length !== 0 &&
      fileOne.trim().length !== 0 &&
      fileTwo.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };
}

ComparismForm.propTypes = {
  compareDocuments: PropTypes.func.isRequired,
  comparing: PropTypes.bool.isRequired,
  result: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = ({ comparism: { comparing, result, error } }) => ({
  comparing,
  result,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  compareDocuments: (documentsData, userId) =>
    dispatch(compareRequest(documentsData, userId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ComparismForm)
);
