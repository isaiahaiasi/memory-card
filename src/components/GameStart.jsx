import React from "react";
import Button from "./Button";

export default function GameStart({ handleStart }) {
  return (
    <section>
      <Button onClick={() => handleStart()}>Start Game!</Button>
    </section>
  );
}
