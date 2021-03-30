import "../styles/game.css";
import React, { useState } from "react";
import words from "../words.json";
import GamePlay from "./GamePlay";
import GameOver from "./GameOver";
import GameStart from "./GameStart";
import ScoreBoard from "./ScoreBoard";

const gameMode = {
  start: "start",
  active: "active",
  end: "end",
};

export default function GameHandler() {
  const [currentGameMode, setGameMode] = useState(gameMode.start);
  const [highScore, setHighScore] = useState(0);
  const [clickedWords, setClickedWords] = useState([]);

  // this is the def of score, & I shouldn't have duplicate/derivable state
  const getScore = () => clickedWords.length;

  //TODO: useRef to get high score from localStorage

  const handleGameOver = () => {
    if (getScore() > highScore) {
      setHighScore(getScore());
    }
    setGameMode(gameMode.end);
  };

  const handleSelection = (word) => {
    if (clickedWords.includes(word)) {
      handleGameOver();
    } else {
      setClickedWords((prevWords) => [...prevWords, word]);
    }
  };

  // RENDER LOGIC

  const renderStart = () => {
    return <GameStart handleStart={() => setGameMode(gameMode.active)} />;
  };

  const renderActive = () => {
    // TODO: render ScoreBoard as well
    return (
      <div className="game-active">
        <ScoreBoard
          score={getScore()}
          highScore={highScore}
          maxScore={words.length}
        />
        <GamePlay words={words} handleSelection={handleSelection} />
      </div>
    );
  };

  const renderGameOver = () => {
    return (
      <GameOver
        clickedWords={clickedWords}
        score={getScore()}
        highScore={highScore}
        maxScore={words.length}
        restart={() => {
          setClickedWords([]);
          setGameMode(gameMode.active);
        }}
        goHome={() => {
          setClickedWords([]);
          setGameMode(gameMode.start);
        }}
      />
    );
  };

  const getGameRender = () => {
    switch (currentGameMode) {
      case gameMode.start:
        return renderStart();
      case gameMode.active:
        return renderActive();
      case gameMode.end:
        return renderGameOver();
      default:
        throw new Error(`Unhandled game state ${currentGameMode}`);
    }
  };

  return <div className="game-container">{getGameRender()}</div>;
}
