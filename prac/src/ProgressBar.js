import React, { useState } from "react";
import './ProgressBar.css'

function ProgressBar () {

    const [value, setvalue] = useState(40);

    return (
        <div>
            <h2>Progress Bar</h2>
            <div className="containers">
                {value >= 0 && value <= 100 ? (
                    <div className="sub_container" style={{width: `${value}%`}}>{value}%</div>
                ):
                alert('value should be in between 0 to 100')
                }
            </div>
            <label htmlFor="progress">Input Percentage: </label>
            <input id="progress" type="number" value={value} onChange={(e) => setvalue(e.target.value)}></input>
        </div>
    )
}


export default ProgressBar;