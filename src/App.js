import React from "react";
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
    <>
      <Nav />
      <Title />
      <Questions characters={characters} />
    </>
  );
};

export default App;
