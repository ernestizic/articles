import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ component: Component, ...restOfProps }) => {
  const { isAuthenticated } = useSelector((state) => state.users);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoutes;
