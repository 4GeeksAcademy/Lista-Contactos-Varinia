import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

/// nuevo contacto
export const AddContact = () => {

    const { store, dispatch } = useGlobalReducer()

    const navigate = useNavigate()

    let [data, setData] = useState({
        name: "", email: "", phone: "", address: "",
    })

    const formChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
/// guardar formulario
    const forSubmit = (e) => {
        e.preventDefault()
        if (!data.name || !data.email || !data.phone || !data.address) {
            alert("Complete all fields")
            return;
        }
        fetch(`https://playground.4geeks.com/contact/agendas/varinia/contacts`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                ...data, agenda_slug: "varinia"
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se creo el contacto")
                }
                return response.json()
            })
            .then((NewContact) => {
                dispatch({
                    type: "add_contact",
                    payload: NewContact
                })
                navigate("/Agenda")
            })
            .catch((error) => console.error("No se creo el contacto", error))
    }

    return (
        <div className='container'>
            <h2>Add a new Contact</h2>
            <form className="row g-3" onSubmit={forSubmit}>
                <div className="col-md-12">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder='Full Name' value={data.name} onChange={formChange} name="name" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder='Enter Email' value={data.email} onChange={formChange} name="email" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder='Enter Phone' value={data.phone} onChange={formChange} name="phone" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder='Enter Address' value={data.address} onChange={formChange} name="address" />
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-secondary" >Save</button>
                </div>
            </form>
            <Link to="/">
                <button className="btn btn-outline-secondary">or get Back to Contacts</button>
            </Link>
        </div>
    )
}
