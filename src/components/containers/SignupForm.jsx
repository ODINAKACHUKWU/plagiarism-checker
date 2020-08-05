import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import jwt from "../../utils/jwt";
import error from "../../helpers/error";

// Styles
import "../../assets/stylesheets/components/containers/signup-form.scss";

class SignupForm extends Component {
  state = {
    userData: {
      name: "",
      email: "",
      password: "",
    },
  };

  handleChange = (event) => {
    const { id, value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      userData: {
        ...prevState.userData,
        [id]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userData } = this.state;

    if (userData.email) {
      this.signupUser(userData.email);
    } else {
      error.displayError("Invalid credentials");
    }
  };

  handleOnFocus = (event) => {
    event.preventDefault();
    error.hideError();
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-5 form">
              <h1 className="font-weight-bold text-center title">
                PLAGIARISM CHECKER
              </h1>
              <p className="text-center mb-4">Hey there! Let's get started.</p>
              <div id="error"></div>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group shadow-sm mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control border-0 p-0"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                    onFocus={this.handleOnFocus}
                  />
                </div>
                <div className="input-group shadow-sm mb-4">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control border-0 p-0"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                    onFocus={this.handleOnFocus}
                  />
                </div>
                <div className="input-group shadow-sm mb-2">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control border-0 p-0"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                    onFocus={this.handleOnFocus}
                  />
                </div>
                <div className="mb-4">
                  <small>
                    Password Strength:{" "}
                    <span className="text-green font-italic">Strong</span>
                  </small>
                </div>
                <div className="form-group form-check link mb-5">
                  <input
                    type="checkbox"
                    className="form-check-input shadow-lg"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">
                    I agree with{" "}
                    <span className="text-blue">Privacy Policy</span>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-blue">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
            <p className="text-white mt-3 text-center link">
              Existing User? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  signupUser = (email) => {
    const token = jwt.encode(email);

    if (token) {
      localStorage.setItem("token", token);
      window.location.href = `${origin}/dashboard`;
    }
  };
}

export default SignupForm;
