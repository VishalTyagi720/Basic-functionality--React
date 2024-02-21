import React, { useState } from "react";


function SubmitForm () {

    const [info, setinfo] = useState({username: "", fullname: "", age: ""});
    const [display, setdisplay] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setdisplay(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" value={info.username || ""} onChange={(e) => setinfo({...info, username: e.target.value})}></input>
                </div>
                <div>
                <label htmlFor="fullname">Fullname: </label>
                <input id="fullname" type="text" value={info.fullname || ""} onChange={(e) => setinfo({...info, fullname: e.target.value})}></input>
                </div>
                <div>
                <label htmlFor="age">Age: </label>
                <input id="age" type="number" value={info.age || ""} onChange={(e) => setinfo({...info, age: e.target.value})}></input>
                </div>
                <button type="submit">Submit</button>
            </form>

            {display && (
                <div>
                <h1>Request send to DB with below request data </h1>
                <ul>
                    <li>Username: {info.username}</li>
                    <li>Fullname: {info.fullname}</li>
                    <li> Age: {info.age}</li>
                </ul>
                </div>
            )}
        </div>
    )
}


export default SubmitForm;