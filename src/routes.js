import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        {/* <Route exact path="/resume" component={Resume} /> */}
      </Switch>
    );
  }
}

export default Routes;
