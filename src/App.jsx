import React, { useState, useEffect } from 'react';
import FlashCard from './components/FlashCard';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import { flashCards } from './data/flashCards';
import './App.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [completedCards, setCompletedCards] = useState([]);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const currentCard = flashCards[currentCardIndex];
  const totalCards = flashCards.length;
  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === totalCards - 1;

  // Reset flip state when card changes
  useEffect(() => {
    setIsCardFlipped(false);
  }, [currentCardIndex]);

  const handlePrevious = () => {
    if (!isFirstCard) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isLastCard) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handleFirst = () => {
    setCurrentCardIndex(0);
  };

  const handleLast = () => {
    setCurrentCardIndex(totalCards - 1);
  };

  const handleCardFlip = (flipped) => {
    setIsCardFlipped(flipped);
    
    // Mark card as completed when user flips to see the answer
    if (flipped && !completedCards.includes(currentCardIndex)) {
      setCompletedCards([...completedCards, currentCardIndex]);
    }
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      case 'Home':
        handleFirst();
        break;
      case 'End':
        handleLast();
        break;
      case ' ':
        event.preventDefault();
        // Space bar to flip card
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentCardIndex, isFirstCard, isLastCard]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>JavaScript Flash Cards</h1>
        <p>Test your JavaScript knowledge with interactive flashcards</p>
      </header>

      <main className="app-main">
        <ProgressBar 
          current={currentCardIndex + 1}
          total={totalCards}
          completedCards={completedCards}
        />

        <div className="flashcard-container">
          <FlashCard 
            card={currentCard}
            onFlip={handleCardFlip}
          />
        </div>

        <Navigation
          currentCard={currentCardIndex + 1}
          totalCards={totalCards}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onFirst={handleFirst}
          onLast={handleLast}
          isFirstCard={isFirstCard}
          isLastCard={isLastCard}
        />

        <div className="keyboard-hints">
          <p>💡 Use arrow keys to navigate, spacebar to flip cards</p>
        </div>
      </main>
    </div>
  );
}

export default App;
