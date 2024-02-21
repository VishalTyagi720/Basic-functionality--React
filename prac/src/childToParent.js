import React, { useEffect, useState } from "react";


function ChildToParent () {

    const [Pid, setPid] = useState(1);
    const [fetchedData, setfetchedData] = useState([]);

    const Apicall = async () => {
        return await fetch(`https://6575a2d2b2fbb8f6509d4fb2.mockapi.io/comments/${Pid}`)
        .then((res) => res.json())
        .then((json) => setfetchedData(json))
    }

    useEffect(() => {
        Apicall();
    }, [Pid])

    return (
        <div>
            <div>
                <p>ID: {fetchedData.id}</p>
                <p>comment: {fetchedData.comment}</p>
            </div>
            <ChildComponent setPid = {setPid}/>
        </div>
    )
}


function ChildComponent ({setPid}) {

    const [Id, setId] = useState(1)

    const handleChange = (e) => {
        if(e.target.value > 50) {
            alert('ID should be less then or equal to 50')
        }else {
        setId(e.target.value)
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        setPid(Id);
    }

    return <div>
        <form>
            <input type="number" value={Id} onChange={handleChange}></input>
            <button onClick={handlesubmit}>Submit</button>
        </form>
    </div>
}


export default ChildToParent;