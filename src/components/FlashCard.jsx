import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ card, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    if (onFlip) {
      onFlip(!isFlipped);
    }
  };

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div className="card-content">
            <h3>Question</h3>
            <p>{card.question}</p>
            <div className="flip-hint">Click to reveal answer</div>
          </div>
        </div>
        <div className="flashcard-back">
          <div className="card-content">
            <h3>Answer</h3>
            <p>{card.answer}</p>
            <div className="flip-hint">Click to see question</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
