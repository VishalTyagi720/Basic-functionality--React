import React, { useEffect, useState } from "react";
import './TrafficLight.css';

function TrafficLight () {
    const [green, setgreen] = useState(true);
    const [yellow, setyellow] = useState(false);
    const [red, setred] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setgreen(false)
            setyellow(true);
        }, 4000)  
    
        setTimeout(() => {
            setyellow(false);
            setred(true)
        }, 4500)      
    }, [])


    return (
        <div className="Traffic_light_container">
            <div className={`traffic_light ${red ? 'red' : ''}`}></div>
            <div className={`traffic_light ${yellow ? 'yellow' : ''}`}></div>
            <div className={`traffic_light ${green ? 'green' : ''}`}></div>
        </div>
    ) 
}


export default TrafficLight;