import React from "react";
import { Route, Switch } from "react-router";

export default (
  <Switch>
    <Route path="/" exact />
    <Route path="/archive" />
    <Route path="/announcements" />
    <Route path="/members" />
    <Route path="/alumni" />
    <Route path="/*" exact />
  </Switch>
);
