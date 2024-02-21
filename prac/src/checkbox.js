import React, { useState } from "react";


function MakeCheckbox () {

    const TypeOfSports = ['cricket', 'videoGames', 'football', 'vollyball', 'tennis', 'basketball', 'hockey']

    const [TypeSports, setTypeSports] = useState(TypeOfSports);
    const [buttonstatus, setbuttonstatus] = useState(false);

    const handleDelete = (index) => {

        const filtered = TypeSports.filter((data, i) => i !== index)
        
        setTypeSports(filtered);
    }

    const handleCheckbox = (e) => {
        setbuttonstatus(!buttonstatus)
    }

    return (
        <div>
            {TypeSports.map((item, index) => {
                return (
                    <span key={index}>
                        
                        <li>
                        <input type="checkbox" id={index} name={item} value={item} onChange={handleCheckbox}></input>
                        {item} &nbsp;
                        {buttonstatus && <button onClick={() => handleDelete(index)}>DELETE</button>}
                        </li>
                    </span>
                )
            })}
        </div>
    )
}


export default MakeCheckbox;