import React from "react";

export default function Game({ words, setGameOver }) {
  const getRandomWord = () =>
    words[Number.parseInt(Math.random() * words.length)];

  return (
    <div>
      <h1>Memory Card</h1>
      <p>{getRandomWord()}</p>
      <p>{getRandomWord()}</p>
      <p>{getRandomWord()}</p>
      <p>{getRandomWord()}</p>
      <button onClick={setGameOver}>End game</button>
    </div>
  );
}
