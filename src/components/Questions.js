import React, { useState, useEffect } from "react";

const Questions = () => {
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

  return <h1></h1>;
};

export default Questions;
