import React, { useState, useEffect } from "react";
import './Home.css'
import Navbar from "../navbar/Navbar";
import TaskItem from "../task/TaskItem";
import CreateForm from "./CreateForm";
import EditTask from "./EditTask";
import { AiOutlineLogout } from 'react-icons/ai';
import { Route, Routes } from "react-router-dom";



function Home({handleLogout, user}){

    const [tasks, setTasks] = useState([])



    useEffect(()=>{
        fetch("http://127.0.0.1:3000/todos")
        .then((r) => r.json())
        .then(setTasks)
    },[])

 






    

    return(
        <>
        <Navbar/>
        <h3 id="logout" onClick={handleLogout}  ><AiOutlineLogout/></h3>


        <div className="container  mt-4" id="selection">
                
            <div className="row">
                <center><h2 style={{color:"red"}} id="armySelect"> </h2></center>
            
               {/* contain a form to add a task */}

               <CreateForm tasks={tasks} setTasks={setTasks}/>
            




            </div>
        </div>


        <div className="container mt-3" id="taskList">
            <center>
                <h4>{`${user.name} Tasks`}</h4>
            </center>
            <div  className="row">

                { tasks.length > 0 ? (
                    tasks.map((task) => <TaskItem task={task}/>)) : null }

                    <Routes>
                        <Route path="/todo/edit" element={<EditTask/>}/>
                    </Routes>



                    
            </div> 
        </div>
        </>
    )
}

export default Home;