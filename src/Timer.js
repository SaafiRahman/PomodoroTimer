import React, { useState, useEffect, useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import TimerContext from './TimerContext';


function Timer() {
    const timerinfo = useContext(TimerContext);

    const handleTime = () => {

    }

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
      
        return `${minutes}:${seconds}`
      }

    return (
        <div>
            <h1>
                <CountdownCircleTimer
                    isPlaying={timerinfo.start}
                    duration={timerinfo.studyMinutes * 60}
                    colors={['#1A9AFF', '#1C19B6']}
                    colorsTime={[7, 0]}
                    size={280}
                >
                    {children}
                </CountdownCircleTimer>  
            </h1>
        </div>
    );
}
export default Timer;

