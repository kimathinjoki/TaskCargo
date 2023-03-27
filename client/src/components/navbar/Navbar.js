import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
            <nav>
                 <Link to="/home">HOME</Link>
                <Link to="/home">TASKS</Link>
                <Link to="/about">ABOUT</Link>
                <div id="indicator"></div>
            </nav>
        </>
    )
}

export default Navbar;