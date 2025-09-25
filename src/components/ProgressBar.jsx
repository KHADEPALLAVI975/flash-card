import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total, completedCards = [] }) => {
  const progress = total > 0 ? (current / total) * 100 : 0;
  const completedCount = completedCards.length;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">
          Card {current} of {total}
        </span>
        <span className="completed-text">
          {completedCount} completed
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-dots">
        {Array.from({ length: total }, (_, index) => (
          <div
            key={index}
            className={`progress-dot ${
              index < current ? 'completed' : ''
            } ${
              completedCards.includes(index) ? 'reviewed' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
