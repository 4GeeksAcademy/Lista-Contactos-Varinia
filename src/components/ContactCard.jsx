import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from 'react-router-dom';

export const contactCard = (props) => {
  const navigate = useNavigate()
  const { store, dispatch } = useGlobalReducer()

  return (

    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="rounded-circle col-md-4">
          <img src="https://img.icons8.com/?size=1200&id=tZuAOUGm9AuS&format=jpg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.informacion.name}
              <div className="button-card">
                <Link to={'/editcontact/' + props.informacion.id}>
                  <button className="btn btn-outline-secondary"><FontAwesomeIcon icon={["fas", "pencil-alt"]} /></button>
                </Link>
                <button className="btn btn-outline-secondary" onClick={() => props.eliminar(props.informacion.id)}><FontAwesomeIcon icon={["fas", "trash-alt"]} /></button>
              </div>
            </h5>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm"><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /></span>
              <p className="list-group-item">{props.informacion.address}</p>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm"><FontAwesomeIcon icon={["fas", "phone"]} /></span>
              <p className="list-group-item">{props.informacion.phone}</p>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm"><FontAwesomeIcon icon={["fas", "envelope"]} /></span>
              <p className="list-group-item">{props.informacion.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}