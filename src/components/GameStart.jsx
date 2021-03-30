import React from "react";
import Button from "./Button";

export default function GameStart({ handleStart }) {
  return (
    <section>
      <h1>Rules:</h1>
      <ul>
        <li>Click on the words/phrases.</li>
        <li>Don't click on the same word/phrase again.</li>
      </ul>
      <Button onClick={() => handleStart()}>Start Game!</Button>
    </section>
  );
}
