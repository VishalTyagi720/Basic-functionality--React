import React, { useState } from "react";


function Sportsweek () {

    const Options = ['cricket', 'football', 'hockey'];
    const Days = ['weekday', 'weekend'];

    const [option, setOption] = useState();
    const [days, setdays] = useState();

    const handleSports = (e) => {
        setOption(e.target.value)
    }
    

    return (
        <div>
            <form>
                <div>
                    <p>Choose a sports</p>
                    {Options.map((item, index) => {
                        return (
                            <div key={index}>
                            <input type="radio" id={item} value={item} name="Sports" onClick={handleSports}></input>
                            <label htmlFor={item}>{item}</label>
                            <br />
                            </div>
                        )
                    })}
                </div>
                <div>
                    <p>Choose the week:</p>
                    {Days.map((item, index) => {
                        return (
                            <div key={index}>
                                <input type="radio" id={item} value={item} name='weeks' onClick={(e) => {setdays(e.target.value)}}></input>
                                <label htmlFor={item}>{item}</label>
                                <br/>
                            </div>
                        )
                    })}                   
                </div>
            </form>
            <div>The sports is {option} and it is a {days}</div>
        </div>
    )
}


export default Sportsweek;