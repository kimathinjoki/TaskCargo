import React, {useState} from "react";
import "./Home.css"
import {GrFormAdd} from "react-icons/gr"


function CreateForm({handleSubmit}){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')




    return(
        <>
            <form className="row gx-3 gy-2 align-items-center" id="create_form" onSubmit={handleSubmit}>
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
                        <select className="form-select" id="specificSizeSelect" onChange={(e)=> e.target.value}>
                            <option selected>Priority...</option>
                            <option value="0">Low</option>
                            <option value="1">Medium</option>
                            <option value="2">High</option>
                        </select>
                    </div>
                    <div className="col-1">
                         <button type="submit" className="btn btn-primary"><GrFormAdd/></button>
                    </div>
                </form>
        </>
    )
}

export default CreateForm;