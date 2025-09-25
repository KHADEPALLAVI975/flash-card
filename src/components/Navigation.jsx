import React from 'react';
import './Navigation.css';

const Navigation = ({ 
  currentCard, 
  totalCards, 
  onPrevious, 
  onNext, 
  onFirst, 
  onLast,
  isFirstCard,
  isLastCard 
}) => {
  return (
    <div className="navigation">
      <div className="nav-buttons">
        <button 
          className="nav-btn secondary"
          onClick={onFirst}
          disabled={isFirstCard}
          title="Go to first card"
        >
          ⏮ First
        </button>
        
        <button 
          className="nav-btn primary"
          onClick={onPrevious}
          disabled={isFirstCard}
          title="Previous card"
        >
          ← Previous
        </button>
        
        <button 
          className="nav-btn primary"
          onClick={onNext}
          disabled={isLastCard}
          title="Next card"
        >
          Next →
        </button>
        
        <button 
          className="nav-btn secondary"
          onClick={onLast}
          disabled={isLastCard}
          title="Go to last card"
        >
          Last ⏭
        </button>
      </div>
      
      <div className="nav-info">
        <span className="card-counter">
          {currentCard} / {totalCards}
        </span>
      </div>
    </div>
  );
};

export default Navigation;
