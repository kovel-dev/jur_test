import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/pages/LoginComponent";
import Register from "./components/pages/RegisterComponent";
import NotFound from "./components/pages/NotFound";

import PrivateRoute from "./PrivateRoute";
import { Guard } from "./Guard";

function Routes() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Redirect to={{ pathname: "/user/login" }} />}
        />
        <Route path="/user/login" component={Login} />
        <Route path="/user/register" component={Register} />

        {/*Redirect if not authenticated */}

        <Guard
          path="/user"
          token="user-token"
          routeRedirect="/user/login"
          component={PrivateRoute}
        />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Routes;
