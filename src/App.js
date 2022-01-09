import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Alumni from "./components/Alumni";
// import Archive from "./components/Archive";
import Announcements from "./components/Announcements";
import Sidebar from "./components/Sidebar";
import Err from "./components/Err";
import Red from "./components/Red";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <NavBar />
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/archive" exact component={Archive} /> */}
                    <Route
                        path="/announcements"
                        exact
                        component={Announcements}
                    />
                    <Route path="/members" exact component={Members} />
                    <Route path="/alumni" exact component={Alumni} />
                    <Route path="/register" exact component={Red} />
                    <Route path="/*" exact component={Err} />
                </Switch>
                <Footer />
            </React.Fragment>
        </Router>
    );
};

export default App;
