import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ component: Component, ...restOfProps }) => {
  const { isAuthenticated, user } = useSelector((state) => state.users);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && user.email === 'ernestizic9@gmail.com' ? (
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
