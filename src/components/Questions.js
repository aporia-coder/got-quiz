import React, { useState, useEffect } from "react";

const Questions = ({ characters }) => {
  const [char, setChar] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
    getChar();
  }, []);

  const getQuote = async () => {
    const response = await fetch("https://got-quotes.herokuapp.com/quotes");
    const data = await response.json();
    setQuote(data.quote);
  };

  const getChar = async () => {
    const response = await fetch("https://got-quotes.herokuapp.com/quotes");
    const data = await response.json();
    setChar(data.character);
  };

  return (
    <div>
      {characters.map(char => (
        <h1>{char}</h1>
      ))}
    </div>
  );
};

export default Questions;
