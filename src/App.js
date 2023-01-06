import React, {useState} from 'react'
import './App.css';
import Homepage from './components/homepage/homepage';
import Loginpage from './components/login/Login'
import Registerpage from './components/Register/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   
  const [user, setUser] = useState()

  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
            <Route exact path ='/' element = {user && user._id ? <Homepage user = {user}/> : <Loginpage setUser = {setUser}/>}/>
            <Route exact path ='/login' element= {<Loginpage setUser = {setUser}/>}/>
            <Route exact path ='/register' element= {<Registerpage/>}/>
        </Routes>
    </BrowserRouter>

      {/* <Homepage/> */}
      {/* <Loginpage/> */}
      {/* <Registerpage/> */}
    </div>
  );
}

export default App;
