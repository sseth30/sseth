import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import AboutMe from "./containers/about/AboutMe";

function App() {
  return (
    <Router basename="/sseth">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
