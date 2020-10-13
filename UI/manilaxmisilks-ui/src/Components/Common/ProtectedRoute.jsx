import React from "react";
import { Route, Redirect } from "react-router-dom";
import { GetCurrentUser, CheckAdminAccess } from "../../Services/userService";
import { toast } from "react-toastify";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  isAdminModule,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!GetCurrentUser() || (isAdminModule && !CheckAdminAccess()))
          return (
            <React.Fragment>
              {toast("Please Login!")}
              <Redirect
                to={{
                  pathname: "/Login",
                  state: { from: props.location },
                }}
              />
            </React.Fragment>
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
