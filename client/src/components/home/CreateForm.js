import React from "react";
import "./Home.css"
import {GrFormAdd} from "react-icons/gr"


function CreateForm(){
    return(
        <>
            <form className="row gx-3 gy-2 align-items-center" id="create_form">
                <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">Name</label>
                     <input type="text" className="form-control" id="specificSizeInputName" placeholder="Title"/>
                </div>
                <div className="col-sm-6">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description"/>
                    </div>
                    </div>
                    <div className="col-sm-2">
                        <label className="visually-hidden" for="specificSizeSelect">Preference</label>
                        <select className="form-select" id="specificSizeSelect">
                            <option selected>Priority...</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
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