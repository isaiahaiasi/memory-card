import React, { useState } from "react";
import Button from "./Button";

export default function GamePlay({ words, clickedWords, handleSelection }) {
  const getRandomWord = () =>
    words[Number.parseInt(Math.random() * words.length)];

  const generateWordSet = () => {
    const newWordSet = new Set();
    while (newWordSet.size < 4) {
      newWordSet.add(getRandomWord());
    }

    // find an unclicked word
    let unclickedWord;
    do {
      unclickedWord = getRandomWord();
    } while (clickedWords.includes(unclickedWord));

    // add the unclicked word at a random index
    // (means one unnecessary getRandomWord(), but idc)
    const newWordArray = Array.from(newWordSet);
    newWordArray[Math.floor(Math.random() * 4)] = unclickedWord;
    return newWordArray;
  };

  const [wordsArray, setWordsArray] = useState(generateWordSet());

  const onClick = (word) => {
    // TODO: add cooldown on click for transition & stop accidental double-clicks
    handleSelection(word);
    setWordsArray(generateWordSet());
  };

  return (
    <div className="game-play-container">
      <section className="word-selector">
        {wordsArray.map((word, i) => (
          <Button key={word + i} onClick={() => onClick(word)}>
            {word}
          </Button>
        ))}
      </section>
    </div>
  );
}
