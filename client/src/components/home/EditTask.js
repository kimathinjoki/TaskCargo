import React, {useState} from "react";
import {GrFormAdd} from "react-icons/gr"


function EditTask({task}){


    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [priority, setPriority] = useState(task.priority)
    const [status, setStatus] = useState(task.status)

    function handleEdit(e){
        e.preventDefault();
        // const user_id = sessionStorage.getItem('user_id')
        fetch(`https://taskcargobacke.onrender.com/todos/${task.id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              priority,
              status
        })
    })
        .then(r=> r.json())
        .then(data=> console.log(data))
    }



    return(
        <>
            <form className="row gx-3 gy-2 align-items-center" id="create_form" onSubmit={handleEdit}>
                <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">Title</label>
                     <input type="text" className="form-control" id="specificSizeInputName" placeholder="Title" Value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="col-sm-6">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">Description</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                    </div>
                    </div>
                    <div className="col-sm-2">
                        <label className="visually-hidden" for="specificSizeSelect">Priority</label>
                        <select className="form-select" id="specificSizeSelect" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                            <option selected>Priority...</option>
                            <option value="0">Low</option>
                            <option value="1">Medium</option>
                            <option value="2">High</option>
                        </select>
                    </div>

                    <div className="col-sm-2">
                        <label className="visually-hidden" for="specificSizeSelect">Priority</label>
                        <select className="form-select" id="specificSizeSelect" value={status} onChange={(e)=> setStatus(e.target.value)}>
                            <option selected>Status...</option>
                            <option value="0">Created</option>
                            <option value="1">Started</option>
                            <option value="2">Completed</option>
                            <option value="3">Canceled</option>
                        </select>
                    </div>



                    <div className="col-1">
                         <button type="submit" className="btn btn-primary"><GrFormAdd/></button>
                    </div>
                </form>
        </>
    )
}

export default EditTask;