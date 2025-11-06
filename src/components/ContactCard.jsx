import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from 'react-router-dom';

export const ContactCard = (props) => {
  const navigate = useNavigate()
  const { store, dispatch } = useGlobalReducer()

  return (

    <div className="card container mb-3" style={{ maxWidth: "640px" }}>
      <div className="contacto row g-0">
        <div className="col-md-4">
          <img src="https://img.icons8.com/?size=1200&id=tZuAOUGm9AuS&format=jpg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.information.name}
              <div className="button-card">
                <Link to={'/editcontact/' + props.information.id}>
                  <button className="btn btn-outline-secondary border border-0"><i className="fa-solid fa-pencil"></i></button>
                </Link>
                <button className="btn btn-outline-secondary border border-0" onClick={() => props.eliminar(props.information.id)}><i className="fa-solid fa-trash"></i></button>
              </div>
            </h5>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text border border-0" id="inputGroup-sizing-sm"><i className="fa-solid fa-location-dot"></i></span>
              <p className="list-group-item">{props.information.address}</p>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text border border-0" id="inputGroup-sizing-sm"><i className="fa-solid fa-phone-flip"></i></span>
              <p className="list-group-item">{props.information.phone}</p>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text border border-0" id="inputGroup-sizing-sm"><i className="fa-solid fa-envelope"></i></span>
              <p className="list-group-item ">{props.information.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}