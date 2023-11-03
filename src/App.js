import './index.css';
import React from 'react';
import Timer from './Timer'
import { useState, useEffect } from 'react';
import TimerContext from './TimerContext';
import PlayPauseButton from './PlayPauseButton';
import ResetButton from './ResetButton';


function App() {
  const [studyMinutes, setStudyMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(25);
  const [start, setStart] = useState(false);
  const [initialStudy, setInitialStudy] = useState(studyMinutes);
  const [initialBreak, setInitialBreak] = useState(breakMinutes);

 const hangletoggle = () => {
  if (start) {
    setStart(false);
  } else {
    setStart(true);
  }
 }
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
          start,
          setStudyMinutes,
          setBreakMinutes,
          setStart
        }}>
          <Timer /> 
        </TimerContext.Provider>
      </div>
      <div className='settings'>
        <h1 style={{ marginRight: '500px' }}>Study Time</h1>
        <h1>Break Time</h1>
      </div>
      <div>
      <div>{studyMinutes}</div>
      </div>
      <div className='button-spacing'>
      <TimerContext.Provider value={{
          studyMinutes,
          breakMinutes,
          start,
          initialBreak,
          initialStudy,
          setStudyMinutes,
          setBreakMinutes,
          setStart,
        }}>
        <PlayPauseButton />
        <ResetButton style={{ marginLeft: '50px', width: '85px' }}/>
        </TimerContext.Provider>
        </div>
    </div>
  );
}

export default App;