import React from "react";

export default function EndView({
  clickedWords,
  score,
  highScore,
  maxScore,
  restart,
  goHome,
}) {
  return (
    <section className="game-over-container">
      <p>
        {score}/{maxScore}
      </p>
      <p>Highscore: {highScore}</p>
      <p>You clicked on these words:</p>
      <ol>
        {clickedWords.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ol>
      <button onClick={restart}>Play Again?</button>
      <button onClick={goHome}>Go to homepage</button>
    </section>
  );
}
