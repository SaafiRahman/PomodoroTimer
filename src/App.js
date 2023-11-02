import './index.css';
import React from 'react';
import Timer from './Timer'
import { useState, useEffect } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [reset,  setReset] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    setReset(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="title-text">
          POMODORO TIMER
        </p>
      </header>

      <div>
          <Timer isrunning={isRunning} reset={reset}/> 
      </div>

      <div className='buttons'>
        <div className="button" onClick={startTimer}>
          <p>play</p>
        </div>

        <div className="button" onClick={pauseTimer}>
          <p>pause</p>
        </div>

        <div className="button" onClick={resetTimer}>
          <p>reset</p>
        </div>
      </div>
    </div>
  );
}

export default App;