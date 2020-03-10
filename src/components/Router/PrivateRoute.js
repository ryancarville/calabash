import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      window.sessionStorage.getItem("loggedIn") ? (
        <Component {...props} />
      ) : (
        <Redirect to={"/login"} />
      )
    }
  />
);
