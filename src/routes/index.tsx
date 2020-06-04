import React, { useContext } from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import AuthContext from "../contexts/auth";

import Home from "../pages/Home";
import SearchProfile from "../pages/SearchProfile";
import ToAsk from "../pages/ToAsk";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ToReply from "../pages/ToReply";

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
        isPrivate={false}
        signed={signed}
      />
      <Route
        path="/search"
        component={SearchProfile}
        isPrivate={false}
        signed={signed}
      />
      <Route
        path="/toask"
        component={ToAsk}
        isPrivate={false}
        signed={signed}
      />
      <Route
        path="/register"
        component={Register}
        isPrivate={false}
        signed={signed}
      />
      <Route
        path="/dashboard"
        component={Dashboard}
        isPrivate={true}
        signed={signed}
      />
      <Route
        path="/toreply"
        component={ToReply}
        isPrivate={true}
        signed={signed}
      />
    </Switch>
  );
};

export default Routes;
