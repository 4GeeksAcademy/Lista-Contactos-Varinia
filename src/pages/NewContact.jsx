import React, {useState} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from 'react-router-dom';

export const NewContact = () => {
    const { store, dispatch } = useGlobalReducer()
    let [form, setForm] = useState ("")

    return (
        <div>
            <h1>aqui iran los contactos</h1>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Phone" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Address</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Address" />
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-secondary" type="button">Save</button>

            </div>
            <Link to="/">
                <button className="btn btn-outline-secondary">Back home</button>
            </Link>
        </div>
    )
}


