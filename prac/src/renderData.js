import React, { useState } from "react";


function RenderData () {

    const Data = [
        {id: 0, username: 'bhefe'},
        {id: 1, username: 'nhkthh'},
        {id: 2, username: 'bheasdbgfe'},
        {id: 3, username: 'jukyhfg'},
        {id: 4, username: 'qwgrdvdv'},
        {id: 5, username: 'tjumgbf'},
        {id: 6, username: 'ngnf'},
        {id: 7, username: 'fjookhegfbrwd'},
        {id: 8, username: 'bhefgdvwdafe'},
        {id: 9, username: 'tyyrrfhtyefe'}
    ]
    const [data, setdata] = useState(Data);

    const handleDelete = (id) => {
        const newdata = data.filter(data => (data.id !== id))
        setdata(newdata);
    }

    return (
        <>
        {data.map((item, index) => {
            return <div key={index}>
                        <li >id :{item.id}, username : {item.username}</li>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
        })}
        </>
    )
}


export default RenderData;