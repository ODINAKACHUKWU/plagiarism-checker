import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import jwt from "../../utils/jwt";
import error from "../../helpers/error";

// Styles
import "../../assets/stylesheets/components/containers/signup-form.scss";

class SignupForm extends Component {
  state = {
    userData: {
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
      this.loginUser(userData.email);
    } else {
      error.displayError("Invalid credentials");
    }
  };

  handleOnFocus = (event) => {
    event.preventDefault();
    error.hideError();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-5 form">
              <h1 className="font-weight-bold text-center title">
                PLAGIARISM CHECKER
              </h1>
              <p className="text-center mb-4">
                Welcome back! Please login to continue.
              </p>
              <div id="error"></div>
              <form onSubmit={this.handleSubmit}>
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
                <div className="input-group shadow-sm mb-4">
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
                <div className="d-flex link mb-3">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input shadow-lg"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Remember Me</label>
                  </div>
                  <div className="ml-auto">
                    <Link to="#" className="text-dark">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-blue">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <p className="text-white mt-3 text-center link">
              New to Product? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  loginUser = (email) => {
    const token = jwt.encode(email);

    if (token) {
      localStorage.setItem("token", token);
      window.location.href = `${origin}/dashboard`;
    }
  };
}

export default SignupForm;
