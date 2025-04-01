import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import About from "./containers/about/About"; // You'll create this page
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
