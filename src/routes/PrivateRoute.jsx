import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../helpers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.authenticate() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
