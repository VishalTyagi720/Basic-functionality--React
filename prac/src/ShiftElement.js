import React, { useState } from "react";
import './ShiftElement.css'

function Shift () {

    const container_1 = ['container1_item1', 'container1_item2', 'container1_item3', 'container1_item4']
    const container_2 = ['container2_item1', 'container2_item2', 'container2_item3', 'container2_item4']

    const [cont1, setcont1] = useState(container_1);
    const [cont2, setcont2] = useState(container_2);

    const MoveRight = () => {
        const newcont2 = cont2.concat(cont1[0]);
        setcont2(newcont2);

        const newcont1 = cont1.filter((item) => 
            cont1.indexOf(item) !== 0
        );
        setcont1(newcont1);
        
    }

    const MoveLeft = () => {

        const newcont1 = cont1.concat(cont2[0]);
        setcont1(newcont1);

        const newcont2 = cont2.filter((item) => 
            cont2.indexOf(item) !== 0
        );
        setcont2(newcont2);    
    }

    return (
        <div className="div">
            <div className="first_container">
                <span> Container 1</span>
                {cont1.map((item) => {
                    return (<li key={item}>{item}</li>)
                } )}
            </div>
            <div className="swap_button_container">
                <button onClick={MoveRight}>&rarr;</button>
                <button onClick={MoveLeft}>&larr;</button>
            </div>
            <div className="second_container">
            <span> Container 2</span>
                {cont2.map((ele) => {
                    return (<li key={ele}>{ele}</li>)
                } )}
            </div>
        </div>
    )
}

export default Shift;