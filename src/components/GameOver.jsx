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
      <p className="game-over__score">
        {score}/{maxScore}
      </p>
      <p>Highscore: {highScore}</p>
      <p style={{ fontSize: "1rem", marginTop: ".5rem" }}>
        You clicked on these words:
      </p>
      <div className="game-over__word-list-spacer">
        <ol className="game-over__word-list">
          {clickedWords.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
      </div>
      <Button onClick={restart}>Play Again?</Button>
      <Button onClick={goHome}>Go to homepage</Button>
    </section>
  );
}
