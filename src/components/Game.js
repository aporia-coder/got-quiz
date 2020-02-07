import React, { useState, useEffect } from "react";
import Data from "./Data";

const Game = ({ characters }) => {
  const [selectedChar, setSelectedChar] = useState("");

  const handleSubmit = () => {
    selectedChar === char ? console.log("true") : console.log(false);
  };

  return (
    <div className="title">
      <div className="game-container">
        <form className="p-4" onSubmit={handleSubmit}>
          <h2 className="quote">{`'${quote}'`}</h2>
          {characters.map((char, i) => (
            <div key={i}>
              <input
                id={char}
                type="radio"
                name="got"
                value={char}
                onChange={() => setSelectedChar(char)}
              />
              <span name="got">{char}</span>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Game;
