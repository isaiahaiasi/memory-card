import React, { useState } from "react";

export default function Game({ words, setGameOver }) {
  const [score, setScore] = useState(Math.floor(Math.random() * 80));

  const getRandomWord = () =>
    words[Number.parseInt(Math.random() * words.length)];

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleSelection = (index) => {
    // check if index is in played indices list
    // if so, game over (pass score, though I haven't figured out how to catch that data yet)
    // else, refresh the board and increment the score
  };

  return (
    <div className="game-container">
      <section className="word-selector">
        <h1>Memory Card</h1>
        <p>{getRandomWord()}</p>
        <p>{getRandomWord()}</p>
        <p>{getRandomWord()}</p>
        <p>{getRandomWord()}</p>
        <button onClick={() => setGameOver(score)}>End game</button>
      </section>
      <section>
        <p>{score}</p>
      </section>
    </div>
  );
}
