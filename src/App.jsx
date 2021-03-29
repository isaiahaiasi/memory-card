import React, { useState } from "react";
import words from "./words.json";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import GameStart from "./components/GameStart";

const gameMode = {
  start: "start",
  active: "active",
  end: "end",
};

function App() {
  const [currentGameMode, setGameMode] = useState(gameMode.start);
  const [highScore, setHighScore] = useState(0);
  const [lastScore, setLastScore] = useState(-1);

  //TODO: useRef to get high score from localStorage

  const handleGameOver = (score) => {
    if (score > highScore) {
      setHighScore(score);
    }
    setLastScore(score);
    setGameMode(gameMode.end);
  };

  const renderStart = () => {
    return <GameStart handleStart={() => setGameMode(gameMode.active)} />;
  };

  const renderActive = () => {
    return (
      <Game words={words} setGameOver={(score) => handleGameOver(score)} />
    );
  };

  const renderGameOver = () => {
    console.log(`renderGameOver highScore = ${highScore}`);
    return (
      <GameOver
        score={lastScore}
        highScore={highScore}
        maxScore={words.length}
        restart={() => setGameMode(gameMode.active)}
        goHome={() => setGameMode(gameMode.start)}
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

  return <div className="App">{getGameRender()}</div>;
}

export default App;
