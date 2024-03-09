
import React, {useEffect, useState} from 'react';
import './App.css';
import LoginForm from './LoginForm';
import SportFiltering from './sportsFilter';
import RenderData from './renderData';
import Sportsweek from './sportsweek';
import MakeCheckbox from './checkbox';
import DropdownCountry from './dropdowncountry';
import ApiCalling from './apicalling';
import Multilevel from './multilevel';
import Todo from './todo';
import SubmitForm from './SubmitFormData';
import Timer from './Timer';
import ProgressBar from './ProgressBar';
import Maxcount from './MaxCount';
import Shift from './ShiftElement';
import MockAPI from './mockapi';
import FnArr from './function_Array';
import ImageSlider from './image_slider';
import Pagination from './pagination';
import JobBoard from './job_board';
import ChildToParent from './childToParent';
import TrafficLight from './TrafficLight';
import CountLimit from './Count_limit';
import GridLights from './Grid_Ligths';


function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    'peach',
    'grape', 
    'pear', 
  ];

  const [value, setValue] = useState(list);
  const [user, setuser] = useState({name: "", email: ""});
  const [error, seterror] = useState("");

  const [apidata, setapidata]= useState([]);
    
  const handleChange = (e) => {
    if (e.target.value === '') {
      setValue(list);
      return;
    }
    const filtered = list.filter((item) => 
      item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setValue(filtered);
  };

  const AdminUser = {
    email: 'admin@gmail.com',
    password: 'admin123'
  }

  const Login = (details) => {
    console.log(details)

    if (details.email === AdminUser.email && details.password === AdminUser.password){
      console.log('logged in');
      setuser({name: details.name, email: details.email});
    }
    else {
      console.log('Sorry email or passowrd is not correct')
      seterror('Sorry email or passowrd is not correct')
    }
  };

  const Logout = () => {
    console.log('Logged out');
    setuser({name: "", email: ""});
  };

  const getuserdata = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=> response.json())
      // .then((response) => console.log(response))
      .then((json) => setapidata(json))
      // .then((json) => console.log(json))
      .catch((error)=> console.log(error))
  }

  useEffect(() => {
    getuserdata();
  }, []);


  return (
    <div className='App'>
      <div>Search: 
    <input name='query' type='text' onChange={handleChange}></input>
  </div>
    {
      value && value.map((items, idx) => (
        <div key={idx}>{items}</div>
      ))
    }

    {(user.email !== "") ? (
      <div>
        <h2>Welcome!! <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
    ) : (
      <LoginForm Login={Login} error={error}/>
    )}

    <div className='apidata_container'>
    {apidata.map((data, index) => {
          return (
            <div className="apidata" key={index}>
              <div className='data'>
              <p>Name: {data.name}</p>
              <p>Username: {data.username}</p>
              <p>Phone number: {data.phone}</p>
              <p>Company Name: {data.company.name}</p>
              <p> Adress: {data.address.street}</p>
              </div>
            </div>
          );
        })}
    </div>

    <SportFiltering />
    <hr/>
    <RenderData />
    <hr/>
    <Sportsweek />
    <hr/>
    <MakeCheckbox />
    <hr />
    <DropdownCountry />
    <hr />
    <ApiCalling />
    <hr />
    <Multilevel />
    <hr/>
    <Todo />
    <hr />
    <SubmitForm />
    <hr />
    <Timer />
    <hr />
    <ProgressBar />
    <hr />
    <Maxcount />
    <hr />
    <Shift />
    <hr />

    <div className='navbar'>
      <div className='logo_part'><span className='logo'>LOGO</span></div>
      <div className='nav_items'>
        <ul>
          <li><a href="https://www.google.com/">Home</a></li>
          <li><a href="https://www.github.com/">Services</a></li>
          <li><a href="https://www.geeksforgeeks.com/">Contacts</a></li> 
          <li><a href="https://www.linkedin.com/">About us</a></li>
          <li><a href="https://www.twitter.com/">Career</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <MockAPI />
    <hr/>
    <FnArr />
    <hr />
    <ImageSlider />
    <hr />
    <Pagination />
    <br />
    <JobBoard />
    <hr />
    <ChildToParent />
    <hr />
    <TrafficLight />
    <hr />
    {/* <CountLimit /> */}
    <hr />
    <GridLights />

    </div>

  );
}



export default App;
