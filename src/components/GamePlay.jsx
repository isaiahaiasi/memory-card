import React, { useState } from "react";
import Button from "./Button";

export default function GamePlay({ words, handleSelection }) {
  const getRandomWord = () =>
    words[Number.parseInt(Math.random() * words.length)];

  const generateWordSet = () => {
    // TODO: might want to account for case where there are no valid options
    const newWordSet = new Set();
    while (newWordSet.size < 4) {
      newWordSet.add(getRandomWord());
    }

    return newWordSet;
  };

  const [wordSet, setWordSet] = useState(generateWordSet()); // 4 random words

  const onClick = (word) => {
    // TODO: add cooldown on click for transition & prevent accidental double-clicks
    handleSelection(word);
    setWordSet(generateWordSet());
  };

  return (
    <div className="game-play-container">
      <section className="word-selector">
        {Array.from(wordSet).map((word, i) => (
          <Button key={word + i} onClick={() => onClick(word)}>
            {word}
          </Button>
        ))}
      </section>
    </div>
  );
}
