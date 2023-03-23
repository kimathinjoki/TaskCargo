import React from "react";
import './Home.css'
import Navbar from "../navbar/Navbar";
import TaskItem from "../task/TaskItem";
import CreateForm from "./CreateForm";
import { AiOutlineLogout } from 'react-icons/ai';



function Home(){
    return(
        <>
        <Navbar/>
        <h3 id="logout"><AiOutlineLogout/></h3>


        <div className="container  mt-4" id="selection">
                
            <div className="row">
                <center><h2 style={{color:"red"}} id="armySelect"> </h2></center>
            
               {/* contain a forrm to add a task */}

               <CreateForm/>

            </div>
        </div>


        <div className="container mt-3" id="taskList">
            <center>
                <h4> Nani Tasks</h4>
            </center>
            <div  className="row">

                <TaskItem/>
                
            </div> 
        </div>
        </>
    )
}

export default Home;