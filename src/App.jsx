import React from "react";
import GameHandler from "./components/GameHandler";

export default function App() {
  return (
    <div className="App">
      <header>
        <span>Memory Test</span>
        <div className="gh-icon-placeholder"></div>
      </header>
      <GameHandler />
      <footer>created by isaiahaiasi w/ :heart:</footer>
    </div>
  );
}
