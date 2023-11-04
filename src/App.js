import './index.css';
import React, { useState } from 'react';
import Timer from './Timer';
import TimerContext from './TimerContext';
import PlayPauseButton from './Buttons/PlayPauseButton';
import ResetButton from './Buttons/ResetButton';
import PlusButton from './Buttons/PlusButton';
import MinusButton from './Buttons/MinusButton';

function App() {
  const [studyMinutes, setStudyMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [start, setStart] = useState(false);
  const [isStudying, setIsStudying] = useState(true);
  const [key, setKey] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p className="title-text">POMODORO TIMER</p>
      </header>

      <div>
        <TimerContext.Provider
          value={{
            studyMinutes,
            breakMinutes,
            start,
            isStudying,
            key,
            setStudyMinutes,
            setBreakMinutes,
            setStart,
            setIsStudying,
            setKey,
          }}
        >
          <Timer />
        </TimerContext.Provider>
      </div>

      <div className='settings'>
        <div style={{ marginRight: '500px' }}>
          <h2>Study Time</h2>
          <div className='button-spacing'>
            <TimerContext.Provider
              value={{
                studyMinutes,
                breakMinutes,
                start,
                setStudyMinutes,
                setBreakMinutes,
                setStart
              }}
            >
              <MinusButton style={{ width: '55px', paddingTop: '8px' }} type={"study"} />
              <h1>{studyMinutes}:00</h1>
              <PlusButton style={{ width: '55px', paddingTop: '8px' }} type={"study"} />
            </TimerContext.Provider>
          </div>
        </div>

        <div>
          <h2>Break Time</h2>
          <div className='button-spacing'>
            <TimerContext.Provider
              value={{
                studyMinutes,
                breakMinutes,
                start,
                setStudyMinutes,
                setBreakMinutes,
                setStart
              }}
            >
              <MinusButton style={{ width: '55px', paddingTop: '8px' }} type={"break"} />
              <h1>{breakMinutes}:00</h1>
              <PlusButton style={{ width: '55px', paddingTop: '8px' }} type={"break"} />
            </TimerContext.Provider>
          </div>
        </div>
      </div>

      <div className='button-spacing'>
        <TimerContext.Provider
          value={{
            studyMinutes,
            breakMinutes,
            start,
            key,
            setStudyMinutes,
            setBreakMinutes,
            setStart,
            setKey,
          }}
        >
          <PlayPauseButton />
          <ResetButton style={{ marginLeft: '50px', width: '85px' }} />
        </TimerContext.Provider>
      </div>
    </div>
  );
}

export default App;
