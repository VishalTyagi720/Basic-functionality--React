import React, { useState } from "react";


function Todo () {

    const li = ['feefef','thyjyh','grghyjdgr']

    const [input, setinput] = useState('');
    const [list, setlist] = useState(li);

    const handleClick = () => {
        // li.splice(li.length, 0, input)
        const newList = [...list, input]
        setlist(newList)
        setinput('')
    }

    const handledelete = (value) => {
        setlist(oldList => {
            return oldList.filter((item) => item !== value)
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => {setinput(e.target.value)} }></input>
            <button type="button" onClick={handleClick}>Add</button>
            {list.map((item) => {
                return <li key={item}>{item} <button onClick={() => handledelete(item)}>&#9587;</button> </li>
            })}
        </div>
    )
}


export default Todo;