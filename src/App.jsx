import React from "react";

import GameHandler from "./components/GameHandler";

// this seems bad, b/c isn't this a side effect, which should be in a useEffect?
// (but that doesn't work here either, don't want this to run on mount/unmount...)
const clearLocalStorage = () => {
  console.log("localStorage cleared!");
  localStorage.clear();

  // hacky, but, alas, idga hoot
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

export default function App() {
  return (
    <div className="App">
      <header>
        <span>Memory Test</span>
        <button className="gh-icon-placeholder" onClick={clearLocalStorage}>
          mc
        </button>
      </header>
      <GameHandler />
      <footer>
        <a
          href="https://github.com/isaiahaiasi/memory-card"
          target="_blank"
          rel="noreferrer"
        >
          created by isaiahaiasi w/ :heart:
        </a>
      </footer>
    </div>
  );
}
