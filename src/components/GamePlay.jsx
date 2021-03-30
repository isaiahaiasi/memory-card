import React, { useState } from "react";

export default function GamePlay({ words, handleSelection }) {
  const getRandomWord = () =>
    words[Number.parseInt(Math.random() * words.length)];

  const generateWordSet = () => {
    const newWordSet = new Set();
    while (newWordSet.size < 4) {
      newWordSet.add(getRandomWord());
    }

    return newWordSet;
  };

  const [wordSet, setWordSet] = useState(generateWordSet()); // 4 random words

  const onClick = (word) => {
    handleSelection(word);
    setWordSet(generateWordSet());
    // TODO: might want a tiny cooldown on click
  };

  return (
    <div className="game-container">
      <section className="word-selector">
        <h1>Memory Card</h1>
        {Array.from(wordSet).map((word) => (
          <button onClick={() => onClick(word)}>{word}</button>
        ))}
      </section>
    </div>
  );
}
