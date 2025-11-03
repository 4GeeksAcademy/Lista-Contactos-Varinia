import React, {useState} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from 'react-router-dom';

export const NewContact = () => {
    const { store, dispatch } = useGlobalReducer()
    let [data, setData] = useState ({
        name: "", email: "", phone: "", address: "", 
    })

    return (
        <div className='container'>
            <h1>Add a new Contact</h1>
            <div className="mb-3">
                <label htmlfor="formGroupExampleInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" value={data.name}/>
            </div>
            <div className="mb-3">
                <label htmlfor="formGroupExampleInput2" className="form-label">Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" value={data.email} />
            </div>
            <div className="mb-3">
                <label htmlfor="formGroupExampleInput" className="form-label">Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Phone" value={data.phone}/>
            </div>
            <div className="mb-3">
                <label htmlfor="formGroupExampleInput" className="form-label">Address</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Address" value={data.address}/>
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


