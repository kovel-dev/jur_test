import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Profile from "./components/pages/DashboardComponent";

export default function UserPrivateRoute(props) {
  return (
    <div>
      {/*<Header/>*/}
      <Switch>
        <Route
          exact
          path={`${props.match.path}/dashboard`}
          component={Profile}
        />
        <Route
          exact
          path={props.match.path}
          render={(props) => (
            <Redirect to={{ pathname: `${props.match.path}/dashboard` }} />
          )}
        />
      </Switch>
    </div>
  );
}
