import React, { useContext, useEffect, useState } from 'react';
import TimerContext from '../TimerContext';

function PlusButton(props) {
    const timerinfo = useContext(TimerContext);
    const type = props.type
    const [disabledButton, setDisabledButton] = useState(false)

    useEffect = (() => {
        setDisabledButton(!timerinfo.start)
    }, [timerinfo.start]);

    const handleToggle = () => {
        if (type === "study" && timerinfo.studyMinutes < 60) {
            timerinfo.setStudyMinutes(prev => prev + 5);
        } else if (type === "break" && timerinfo.breakMinutes < 60){
            timerinfo.setBreakMinutes(prev => prev + 5);
        }
        };

    return (
        <button {...props} disabled={disabledButton} onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    )
}

export default PlusButton;