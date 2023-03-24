import './App.css';
import {React, useState} from 'react';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import Landingpage from './components/home/Landingpage';
 import {AiOutlineLogin} from "react-icons/ai"
 import {Route, Routes, Link, Navigate} from 'react-router-dom'

function App() {


  const [user, setUser] = useState('');

  function signup(username) {
		setUser(username);
	}






  return (
    <div className="App">
      <div >
        <h3 >
          <Link to="/" id="logo_title">TASK-CARGO</Link>  
        </h3>

        <button id="auth_logo" >
        <Link to="/auth"><AiOutlineLogin/></Link>
        </button>

      </div>
      {/* <Home/> */}

     




      <Routes>
        <Route path="/" element={<Landingpage/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/auth" element={
       
        !user ? <Auth signup={signup} /> : <Navigate to="/home"></Navigate>
       }/>
      </Routes>

      
        
    </div>
  );
}

export default App;
