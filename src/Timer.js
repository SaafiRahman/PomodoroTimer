import React, { useState, useEffect, useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import TimerContext from './TimerContext';
import addNotification from 'react-push-notification';

function StudyTimer() {
    const timerinfo = useContext(TimerContext); 

    const handleComplete = () => {
        addNotification({
            title: 'Time for a break',
            message: 'I think you deserve a well earned break',
            duration: 5000,
            native: true
        });
        timerinfo.setIsStudying(false);
    } 

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        return `${minutes}:${seconds}`
    }
return (
    <CountdownCircleTimer
                    key={timerinfo.key}
                    isPlaying={timerinfo.start}
                    duration={timerinfo.studyMinutes}
                    colors={['#1A9AFF', '#1C19B6']}
                    colorsTime={[7, 0]}
                    size={280}
                    onComplete={handleComplete}
                >
                    {children}
                </CountdownCircleTimer>
)}

function BreakTimer() {
    const timerinfo = useContext(TimerContext); 

    const handleComplete = () => {
        timerinfo.setIsStudying(false);
    } 

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        return `${minutes}:${seconds}`
    }
return (
    <CountdownCircleTimer
                    key={timerinfo.key}
                    isPlaying={timerinfo.start}
                    duration={timerinfo.breakMinutes * 60}
                    colors={['#1DE613', '#097504']}
                    colorsTime={[7, 0]}
                    size={280}
                    onComplete={handleComplete}
                >
                    {children}
                </CountdownCircleTimer>
)}

function Timer() {
    const timerinfo = useContext(TimerContext);
    return (
        <div>
            <h1>
                {timerinfo.isStudying ? <StudyTimer /> : <BreakTimer />}
            </h1>
        </div>
    );
}
export default Timer;

