import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/HomePage";
import Navigation from "./components/Navigation";

function Routes () {
    return (
      <>
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/navigation" exact component={Navigation} />
            </Switch>
          </>
        </Router>
      </>
    );
}

export default Routes;
