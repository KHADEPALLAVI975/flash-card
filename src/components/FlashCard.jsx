import React, { useState, useEffect } from 'react';
import './FlashCard.css';

const FlashCard = ({ card, onFlip, isFlipped = false }) => {
  const [internalFlipped, setInternalFlipped] = useState(false);

  // Reset internal state when card changes
  useEffect(() => {
    setInternalFlipped(false);
  }, [card.id]);

  const handleClick = () => {
    const newFlipped = !internalFlipped;
    setInternalFlipped(newFlipped);
    if (onFlip) {
      onFlip(newFlipped);
    }
  };

  return (
    <div 
      className={`flashcard ${internalFlipped ? 'flipped' : ''}`}
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
