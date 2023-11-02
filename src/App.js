import './index.css';
import React from 'react';
import Timer from './Timer'
import { useState, useEffect } from 'react';
import TimerContext from './TimerContext';
import PlayPauseButton from './PlayPauseButton';

function App() {
  const [studyMinutes, setStudyMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(25);

  return (
    <div className="App">
      <header className="App-header">
        <p className="title-text">
          POMODORO TIMER
        </p>
      </header>

      <div>
        <TimerContext.Provider value={{
          studyMinutes,
          breakMinutes,
          setStudyMinutes,
          setBreakMinutes
        }}>
          <Timer /> 
        </TimerContext.Provider>
      </div>
      <div className='settings'>
        <div>
        <p>studytime</p>
        </div>
        <div>
        <p>breaktime</p>
        </div>
      </div>
        <PlayPauseButton />

    </div>
  );
}

export default App;