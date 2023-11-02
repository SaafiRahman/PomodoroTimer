import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({isrunning, reset}) {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => { 
            setStart(isrunning);
    }, [isrunning])

    useEffect(() => {
            console.log("also resetted");
            setStart(false);
            setMinutes(1);
            setSeconds(0);
    }, [reset])

    useEffect(() => {   
        let interval;
        if  (start && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                } else if (minutes > 0) {
                    setMinutes((minutes) =>  minutes - 1);
                    setSeconds(59);
                }
            }, 1000)
        } 
        return () => clearInterval(interval);

    }, [seconds, minutes, start])
    return (
        <div>
            <h1><CircularProgressbar value={seconds} text={`{seconds}`} /></h1>
        </div>
    );
}
export default Timer;