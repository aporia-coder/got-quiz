import React from "react";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Questions from "./components/Questions";

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
    "Varys"
  ];

  return (
    <>
      <Nav />
      <Landing />
      <Questions />
    </>
  );
};

export default App;
