import React, { useEffect, useRef, useState } from "react";
// import './MaxCount.css'

function Maxcount  () {

    const [count, setcount] = useState(0);
    const [timeleft, settimeleft] = useState(10);
    const iter = useRef(null);

    const clear = () => window.clearInterval(iter.current)

    useEffect(() => {
        iter.current = window.setInterval(() => {
            settimeleft((t) => t - 1)
        }, 1000)

        return clear
    }, [])

    useEffect(() => {
        if (timeleft === 0) {
            clear()
        }
    }, [timeleft])

    return (
        <div>
            <h2>No of Clicks until timer expires</h2>
            <div className="Maxcount">
                <div>{count}</div>
                <h3>Tome Left: {timeleft} seconds</h3>
                {timeleft === 0 ? null :
                    <button onClick={() => {setcount(count + 1)}} >+</button>
                }
            </div>
        </div>
    )
}


export default Maxcount;