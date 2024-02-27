import React from "react";
import './TrafficLight.css';

function TrafficLight () {
    return (
        <div className="Traffic_light_container">
            <div className="Traffic_light_red traffic_light"></div>
            <div className="Traffic_light_yellow traffic_light"></div>
            <div className="Traffic_light_green traffic_light"></div>
        </div>
    )
}


export default TrafficLight;