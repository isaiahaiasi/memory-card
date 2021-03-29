import React, { useState } from "react";
import words from "./words.json";
import Game from "./components/Game";

const gameMode = {
  start: "start",
  active: "active",
  end: "end",
};

function App() {
  const [currentGameMode, setGameMode] = useState(gameMode.start);

  const renderStart = () => (
    <section>
      <button onClick={() => setGameMode(gameMode.active)}>Start Game!</button>
    </section>
  );

  const renderActive = () => (
    <Game words={words} setGameOver={() => setGameMode(gameMode.end)} />
  );

  const renderEnd = () => (
    <section>
      <button onClick={() => setGameMode(gameMode.active)}>Play Again!</button>
      <button onClick={() => setGameMode(gameMode.start)}>
        Go to homepage
      </button>
    </section>
  );

  const getGameRender = () => {
    switch (currentGameMode) {
      case gameMode.start:
        return renderStart();
      case gameMode.active:
        return renderActive();
      case gameMode.end:
        return renderEnd();
      default:
        throw new Error(`Unhandled game state ${currentGameMode}`);
    }
  };

  return <div className="App">{getGameRender()}</div>;
}

export default App;
