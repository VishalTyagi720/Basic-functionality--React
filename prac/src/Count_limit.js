import React, { useEffect, useState } from "react";


function CountLimit () {

    const [count, setcount] = useState(0);

    useEffect(() => {
        if (count < 10) {
            const timer = setTimeout(() => {
                setcount(count + 1)
            }, 500)
    
            return () => clearTimeout(timer)
        }
        // else {
        //     const timer = setTimeout(() => {
        //         setcount(count - 1)
        //     }, 500)
    
        //     return () => clearTimeout(timer)
        // }
    })


    return (
        <div>
            {count}
            {/* <button onClick={handlecount}></button> */}
        </div>
    )
}



export default CountLimit;