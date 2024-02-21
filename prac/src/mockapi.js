import React, { useEffect, useState } from "react";
import axios from "axios";


function MockAPI () {
    const defaultData = {name:null, mail_id:null, age:null, branch:null, course:null}
    const [details, setdetails] = useState(defaultData);
    const [renderdata, setrenderdata] = useState([]);

    const PostData = () => {
        axios.post('https://6575a2d2b2fbb8f6509d4fb2.mockapi.io/users', {
            name: details.name,
            mail_id: details.mail_id,
            age: details.age,
            branch: details.branch,
            course: details.course,
            hobbies: ['dancing', 'cooking', 'Travelling'],
        })
        .then((response) => {
            getData();
            setdetails(defaultData);
        })
        .catch((error) => {
            console.error(error)
        });
    }

    const getData = () => {
        axios.get(`https://6575a2d2b2fbb8f6509d4fb2.mockapi.io/users`)
        .then((response) => {
            setrenderdata(response.data);
            // console.log(response.data);
        })
        .catch((error) => {
            console.error(error)
        });
    }

    useEffect(() => {
        getData();
    },[])

    const updateData = (id) => {
        // console.log(id);
        axios.put(`https://6575a2d2b2fbb8f6509d4fb2.mockapi.io/users/${id}`, {
            name:details.name,
            age:25,
        })
        .then((response) => {
            getData();
        })
        .catch((error) => {
            console.error(error)
        });
    }

    const deleteData = (id) => {
        axios.delete(`https://6575a2d2b2fbb8f6509d4fb2.mockapi.io/users/${id}`)
        .then((response) => {
            getData();
        })
        .catch((error) => {
            console.error(error)
        });
    }

    return (
        <div>
            <div>name:
            <input type="text" onChange={(e) =>{setdetails({...details, name: e.target.value})}} value={details.name}></input>mail:
            <input type="email" onChange={(e) =>{setdetails({...details, mail_id: e.target.value})}} value={details.mail_id}></input>age:
            <input type="number" onChange={(e) =>{setdetails({...details, age: e.target.value})}} value={details.age}></input>branch:
            <input type="text" onChange={(e) =>{setdetails({...details, branch: e.target.value})}} value={details.branch}></input>course:
            <input type="text" onChange={(e) =>{setdetails({...details, course: e.target.value})}} value={details.course}></input>
            </div>
            <button onClick={PostData}>
                Post Data
            </button>
            {/* <button onClick={getData}>
                Get Data
            </button> */}
            {renderdata && renderdata.map(((data, index) => {
                return(
                    <div key={index}>
                        <h1>{`${data.id}. ${data.name}`}</h1>
                        <button onClick={() => updateData(data.id)}>Update</button>
                        <button onClick={() => deleteData(data.id)}>Delete</button>
                    </div>
                )
            }))}
        </div>
    )
}


export default MockAPI;