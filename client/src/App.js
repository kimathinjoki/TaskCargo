import './App.css';
import {React, useState, useEffect} from 'react';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import Landingpage from './components/home/Landingpage';
 import {Route, Routes, Link, Navigate} from 'react-router-dom'

function App() {


  const [user, setUser] = useState(null);

  function signup(user) {
		setUser(user);
	}



  // useEffect(() => {
  //   // auto-login
  //   fetch("http://127.0.0.1:3000/users/login/check").then((r) => {
  //     if (r.status === 200) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  function handleLogout() {
    fetch("https://taskcargobacke.onrender.com//users/logout", { method: "DELETE" }).then((r) => {
      if (r.status === 200) {
        setUser(null);
      }
    });
  }






  return (
    <div className="App">
      <div >
        <h3 >
          <Link to="/" id="logo_title">TASK-CARGO</Link>  
        </h3>

      </div>
      {/* <Home/> */}

     




      <Routes>
        <Route path="/" element={<Landingpage/>}/>
       <Route path="/home" element={<Home handleLogout={handleLogout} user={user}/>}/>
       <Route path="/auth" element={<Auth signup={signup}/>}/>
      </Routes>

      
        
    </div>
  );
}

export default App;
