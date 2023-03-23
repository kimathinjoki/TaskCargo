import React from "react";
import "./Navbar.css"


function Navbar(){
    return(
        <>
            <nav>
                 <a href="#">HOME</a>
                <a href="#">TASKS</a>
                <a href="#">ABOUT</a>
                <div id="indicator"></div>
            </nav>
        </>
    )
}

export default Navbar;