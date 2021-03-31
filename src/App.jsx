import React from "react";

import GameHandler from "./components/GameHandler";

// this seems bad, b/c isn't this a side effect, which should be in a useEffect?
// (but that doesn't work here either, don't want this to run on mount/unmount...)
const clearLocalStorage = () => {
  console.log("localStorage cleared!");
  localStorage.clear();
};

export default function App() {
  return (
    <div className="App">
      <header>
        <span>Memory Test</span>
        <div className="gh-icon-placeholder" onClick={clearLocalStorage}></div>
      </header>
      <GameHandler />
      <footer>created by isaiahaiasi w/ :heart:</footer>
    </div>
  );
}
