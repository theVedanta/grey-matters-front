import React from "react";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Alumni from "./components/Alumni";
import Archive from "./components/Archive";
import Announcements from "./components/Announcements";
import Sidebar from "./components/Sidebar";
import Err from "./components/Err";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/archive" component={Archive} />
          <Route path="/announcements" component={Announcements} />
          <Route path="/members" component={Members} />
          <Route path="/alumni" component={Alumni} />
          <Route path="*" exact component={Err} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
