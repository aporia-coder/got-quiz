import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Questions from "./components/Questions";
import Title from "./components/Title";

const App = () => {
  const characters = [
    "Bronn",
    "Brynden Tully",
    "Cersei",
    "The Hound",
    "Jaime Lannister",
    "Littlefinger",
    "Olenna Tyrell",
    "Renly Baratheon",
    "Tyrion",
    "Varys",
  ];

  return (
    <Router>
      <Nav />
      <Route path exact="/" component={Title} />
      <Route
        path="/game"
        render={() => <Questions characters={characters} />}
      />
    </Router>
  );
};

export default App;
