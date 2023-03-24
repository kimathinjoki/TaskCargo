import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import Landingpage from './components/home/Landingpage';
 import {AiOutlineLogin} from "react-icons/ai"
 import {Route, Routes, Link} from 'react-router-dom'

function App() {


function auth(){
  <Link to="/auth"></Link>
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
       <Route path="/auth" element={<Auth/>}/>
       <Route path="/home" element={<Home/>}/>
      </Routes>

      
        
    </div>
  );
}

export default App;
