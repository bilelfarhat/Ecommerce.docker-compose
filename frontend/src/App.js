
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const api="http://localhost:3001"
  const [users,setUsers]=useState([])
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [role,setRole]=useState("")
  useEffect(()=>{
    axios.get(`${api}/users/affichage`)
  .then(res=>{
    setUsers(res.data)
  },)
  },[users])
  /*const users=[
    {name:"bilel",email:"bilel@gmail.com",role:"admin"}
  ]*/
  const createUser=()=>{
    if(name && email && password)
    {
      axios.post(`${api}/users/register`,{name,email,password,role})
    .then(res=>res.data)
    }
    
  }
  
  return (
  <>
  {users.map(user=>{
      return(
        <div className='card' key={user._id}>
      <ul>
        <li>Name:{user.name}</li>
        <li>Email:{user.email}</li>
        <li>Role:{user.role}</li>
      </ul>
    </div>
      )
  })}

  <div>
    <input type='text' placeholder='Name' onChange={e=>setName(e.target.value)}/>
    <input type='text' placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
    <input type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
    <input type='text' placeholder='Role' onChange={e=>setRole(e.target.value)}/>
    <button onClick={createUser}>Create user</button>
    



  </div>
  </>
  );
}


