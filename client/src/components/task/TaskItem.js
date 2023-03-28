import React, { useState} from "react";
import { Link, Route, Routes } from "react-router-dom";
import './TaskItem.css'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import EditTask from "../home/EditTask";

function TaskItem({task}){




    function handlePriority(){
        if(task.priority === "HIGH"){
            return "high"
        }else if(task.priority === "MEDIUM"){
            return "medium"
        }else if(task.priority === "LOW"){
            return "low"
        }
    }




    return(
        <>
        <div className="col-11" id="task_item">
            <div className="card" id="task_card" >
                <div className="card-body">
                    <h5 id={handlePriority}>{task.title}</h5>
                    <div>
                        <p id="description"> {task.description}</p>
                    </div>

                    <div id="item_footer">
                        <h6><span>Status:</span> <span>{task.status}</span>  </h6>
                        <h6 id="del_edit"><span><Link to="/todo/edit"><AiOutlineEdit/></Link></span>  <span><AiOutlineDelete/></span></h6>
                    </div>
                    
                   
                    {/* <a target={'_blank'} href="#" className="btn btn-primary">{'VISIT PAGE'}</a> */}
                </div>
            </div>
        </div>  
        
        <Routes>
            <Route path="/todo/edit" element={<EditTask task={task}/>}/>
        </Routes>


        </>
    )
}

export default TaskItem;