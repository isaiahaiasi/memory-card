import React from "react";

export default function GameStart({ handleStart }) {
  return (
    <section>
      <button onClick={() => handleStart()}>Start Game!</button>
    </section>
  );
}
