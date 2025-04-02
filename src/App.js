import React, { useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import AboutMe from "./containers/about/AboutMe";
import StyleContext from "./contexts/StyleContext";

function App() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "App dark-mode" : "App"}>
      <Router basename="/sseth">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
