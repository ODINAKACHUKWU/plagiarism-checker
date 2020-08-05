import React from "react";
import SignupForm from "../components/containers/SignupForm";

// Styles
import "../assets/stylesheets/views/signup-page.scss";

const SignupPage = () => {
  return (
    <div className="background">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
