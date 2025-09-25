# JavaScript Flash Cards App

A modern, interactive flash card application built with React to help you learn JavaScript concepts. Features include flip animations, progress tracking, and keyboard navigation.

## Features

- **Interactive Flashcards**: Click to flip between questions and answers
- **Progress Tracking**: Visual progress bar and completion tracking
- **Navigation Controls**: Previous/Next buttons with keyboard shortcuts
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradients and smooth animations

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Usage

- **Click** on flashcards to flip between questions and answers
- **Navigate** using the Previous/Next buttons or keyboard arrows
- **Track progress** with the visual progress bar
- **Keyboard shortcuts**:
  - Arrow keys: Navigate between cards
  - Home/End: Jump to first/last card
  - Spacebar: Flip current card

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── FlashCard.jsx   # Main flashcard component with flip animation
│   ├── ProgressBar.jsx # Progress tracking component
│   └── Navigation.jsx  # Navigation controls
├── data/
│   └── flashCards.js   # Pre-defined JavaScript questions and answers
├── App.jsx            # Main application component
├── App.css            # Application styles
├── index.css          # Global styles
└── main.jsx           # Application entry point
```

## Technologies Used

- **React 18** - Component-based architecture
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features

## Learning Objectives

This project demonstrates:
- **State Management**: Using React hooks (useState, useEffect)
- **Component Architecture**: Reusable, modular components
- **Event Handling**: User interactions and keyboard events
- **CSS Animations**: Smooth transitions and 3D transforms
- **Responsive Design**: Mobile-first approach
