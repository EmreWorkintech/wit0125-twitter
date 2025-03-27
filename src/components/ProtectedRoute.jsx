import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
}

export default ProtectedRoute;
