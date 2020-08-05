import React from "react";
import LoginForm from "../components/containers/LoginForm";

// Styles
import "../assets/stylesheets/views/login-page.scss";

const LoginPage = () => {
  return (
    <div className="background">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
