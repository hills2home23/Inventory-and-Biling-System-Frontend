import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const authData = window.localStorage.getItem("token");
        return(authData ? <Component {...props} /> : <Redirect to="/" />)
      }}
    ></Route>
  );
}

export default ProtectedRoute;