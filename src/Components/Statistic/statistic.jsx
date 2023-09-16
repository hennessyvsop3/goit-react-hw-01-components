import React from 'react'

export const Statistic = ({ good, neutral, bad, totalCalc, positiveFeedbackCalc }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good} </li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad} </li>
        <p>Total: {totalCalc} </p>
        <p>Positive feedback:{positiveFeedbackCalc}% </p>
      </ul>
    </div>
  );
};
