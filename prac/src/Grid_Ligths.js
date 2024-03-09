import React, { useState } from "react";
import './Grid_Ligths.css';


function GridLights () {
    const [order, setOrder] = useState([]);
    const [isDeavtivate, setisDeactivate] = useState(false);


    const config = [
        [1,1,1],[1,0,1],[1,1,1]
    ]

    const handleActivate = (index) => {
        const newOrder =  [...order, index]
        setOrder(newOrder);

        if (newOrder.length === config.flat(1).filter(Boolean).length) {
            handleDeactivate();
        }
    };

    const handleDeactivate = () => {
        setisDeactivate(true);
        const timer = setInterval(() => {
            setOrder(prevOrder => {
                const newOrder = prevOrder.slice()
                newOrder.pop();

                if (newOrder.length === 0) {
                    clearInterval(timer);
                    setisDeactivate(false)
                }

                return newOrder;
            })
        }, 300)
    };


    return <div className="wrapper">
        <div className="grid" style={{gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
            {config.flat(1).map((value, index) => {
                return value ? <Cell 
                    key={index} 
                    filled={order.includes(index)}
                    onClick={() => handleActivate(index)}
                    isDisabled={order.includes(index) || isDeavtivate} />
                    : <span key={index}/>
            })}
        </div>
    </div>
}


function Cell ({filled, onClick, isDisabled}) {
    return <button className={filled ? "cell cell_activated" : "cell"} onClick={onClick} disabled={isDisabled} />
}


export default GridLights;