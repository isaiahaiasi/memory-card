import React from "react";

export default function ScoreBoard({ score, highScore, maxScore }) {
  return (
    <div className="score-board">
      <p>Current Score:</p>
      <p className="score-board__current-score">
        {score}/{maxScore}
      </p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
