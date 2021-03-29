import React from "react";

export default function EndView({
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
      <button onClick={restart}>Play Again?</button>
      <button onClick={goHome}>Go to homepage</button>
    </section>
  );
}
