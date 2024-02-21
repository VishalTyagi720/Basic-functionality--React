import React, { useState } from "react";


function Timer () {

    const [timer, setimer] = useState(0);

    const handleStart = () => {
        window.mytimer = setInterval(() => {
            setimer((prevTimer) => prevTimer + 1 );
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(window.mytimer)
    };

    const handleReset = () => {
        clearInterval(window.mytimer)
        setimer(0);
    }

    return (
        <div>
            <h3>Timer</h3>
            <span>{Math.trunc(timer / 60)} min</span>
            <span>{timer % 60} sec</span>
            <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}


export default Timer;