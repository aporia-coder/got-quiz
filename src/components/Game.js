import React, { useState, useEffect } from "react";

const Game = ({ characters }) => {
  const [char, setChar] = useState("");
  const [quote, setQuote] = useState("");
  const [selectedChar, setSelectedChar] = useState("");

  useEffect(() => {
    getChar();
  }, []);

  const getChar = async () => {
    const response = await fetch("https://got-quotes.herokuapp.com/quotes");
    const data = await response.json();
    setChar(data.character);
    setQuote(data.quote);
  };

  const handleSubmit = () => {
    selectedChar === char ? console.log("true") : console.log(false);
  };

  return (
    <div className="title">
      <div className="game-container">
        <form className="p-4" onSubmit={handleSubmit}>
          <h2>{`'${quote}'`}</h2>
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