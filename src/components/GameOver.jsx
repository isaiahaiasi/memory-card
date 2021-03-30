import React from "react";
import Button from "./Button";

export default function EndView({
  clickedWords,
  score,
  highScore,
  maxScore,
  restart,
  goHome,
}) {
  const gameOverMsg =
    score === maxScore
      ? "Impressive! Wow! Good job!"
      : score === highScore
      ? "Congratulations! New high score!"
      : "Aww, better luck next time! :)";

  return (
    <section className="game-over">
      <p>{gameOverMsg}</p>
      <p>
        {score}/{maxScore}
      </p>
      <p>Highscore: {highScore}</p>
      <p>You clicked on these words:</p>
      <ol className="game-over__word-list">
        {clickedWords.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ol>
      <Button onClick={restart}>Play Again?</Button>
      <Button onClick={goHome}>Go to homepage</Button>
    </section>
  );
}
