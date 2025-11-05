import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from 'react-router-dom';

export const contactCard = (props) => {
  const navigate = useNavigate()
  const { store, dispatch } = useGlobalReducer()

  return (

    <div className="card mb-3" style="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://img.icons8.com/?size=1200&id=tZuAOUGm9AuS&format=jpg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.informacion.name}
              <div className="button-card">
                <Link to={'/editcontact/' + props.informacion.id}>
                  <button className="btn btn-outline-secondary">edit</button>
                </Link>
                <button className="btn btn-outline-secondary" onClick={() => props.eliminar(props.informacion.id)}>delete</button>
              </div>
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{props.informacion.address}</li>
              <li class="list-group-item">{props.informacion.phone}</li>
              <li class="list-group-item">{props.informacion.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}