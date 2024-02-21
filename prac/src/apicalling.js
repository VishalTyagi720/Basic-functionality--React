import React, { useState } from "react";
import './apicalling.css'

function ApiCalling () {
    const obj = [1,2,4,7,9]

    const [Object, setObject] = useState(obj)
    const [num, setnum] = useState()

    const handlechange = (e) => {
        // console.log(typeof Number(e.target.value))
        setnum(Number(e.target.value))
        // console.log(num)
    }

    const handleclick = () => {
        if (Object.indexOf(num) !== -1) {
            alert("The number is already present in the array")
        }
        else {
            const newobj = Object.concat(num)
            // console.log(newobj)
            newobj.sort(function(a, b){return a - b})
            setObject(newobj);
        }
    }

    return (
        <div className="main1">
            <ul className="ul">
                {Object.map((item, index) => {
                    return <li className="container" key={index}>{item}</li>
                })}
            </ul>
            <div className="addContainer">
                <input type="number" value={num} onChange={handlechange}></input>
                <button type="button" onClick={handleclick}>Submit</button>
            </div>
        </div>
    )
}

export default ApiCalling;