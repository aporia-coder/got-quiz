import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Game from "./components/Game";
import Landing from "./components/Landing";
import Data from "./components/Data";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path exact="/" component={Landing} />
        <Route path="/game" render={() => <Game characters={characters} />} />
        <Route path="/login" />
      </Switch>
    </Router>
  );
};

export default App;
