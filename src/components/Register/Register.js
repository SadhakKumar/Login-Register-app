import React from 'react'
import './register.css'
import { useState } from 'react'
import axios from "axios"
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Register() {
  
  const navigate = useNavigate();


  const [state, setstate] = useState({
    name : "",
    email : "",
    password : "",
    reEnterPassword : "",
  });
  const handlechange = (e) =>{

    const {name, value} = e.target;

    setstate({
      ...state,
      [name]: value
    })
  }

  const register = () =>{
    const {name,email,password,reEnterPassword} = state

    if(name && email && password && password === reEnterPassword){
      // alert("posted")
      axios.post("http://localhost:8000/register",state)
      .then(res => {console.log(res)
        if(res.data === "user already registered"){
          alert(res.data)
          navigate("/login")
        }else{
          alert(res.data.message)
          navigate("/login")
        }
        
        
      })
      
    }else{
      alert("invalid input!!!!")
    }
  }

  return (
    
      <div className='container'>
        {console.log("user", state)}
        <h3>Register</h3>
        <input type="text" placeholder='name' name='name' value={state.name} onChange ={handlechange}/>
        <input type="text" placeholder='email' name='email' value={state.email} onChange ={handlechange}/>
        <input type="text" placeholder='Password' name='password' value={state.password} onChange ={handlechange}/>
        <input type="text" placeholder='Re-enter Password' name='reEnterPassword' value={state.reEnterPassword} onChange ={handlechange}/>

        <button type="button" className="btn btn-primary register" onClick={register}>Register</button>
        <div>or</div>
        <Link to='/login' className="btn btn-primary register">login</Link>

    </div>
    
  )
}
