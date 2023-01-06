import React, {useState} from 'react'
import axios from "axios"
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  const navigate = useNavigate();



  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const {name, value} = e.target;

    setstate({
      ...state,
      [name]: value
    })
  }
  const login = () =>{
    const {email, password} = state

    if(email && password){
      axios.post("http://localhost:8000/login", state)
      .then(res => {
        alert(res.data.message)
        props.setUser(res.data.user)
        navigate("/");

      })
    }else{
      alert("invalid input!")
    }
  }

  return (
    <div className='container'>
      {console.log("user", state)}
      <h3>Login</h3>
      <input type="text" placeholder='email' name='email' value={state.email} onChange={handlechange}/>
      <input type="text" placeholder='Password' name='password' value={state.password} onChange={handlechange}/>
      <button type="button" class="btn btn-primary" onClick={login}>Login</button>
      <div>or</div>
      <Link className="btn btn-primary register" to='/register'>Register</Link>


    </div>
  )
}
