import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ContactCard } from "../component/ContactCard";

export const Agenda = () => {

  const { store, dispatch } = useGlobalReducer()
  const contactos = store.contacts || []

  const obtenerContactos = async () => {
    try {
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/varinia/contacts`)
      const data = await resp.json();
      dispatch({
        type: "get_contact",
        payload: data.contacts
      })
    } catch (error) {
      console.log("No se trajeron los contactos de la agenda", error);

    }
  }

  const eliminarContacto = async (id) => {
    try {
    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/varinia/contacts/${id}`, {
      method: "DELETE"
    });     
        if (resp.ok) {
          dispatch({
        type: "delete_contact",
        payload: id});
        console.log("Se elimino el contacto");
          obtenerContactos();
        } else {
          console.log("No se elimino el contacto");
        }
      } catch(error) 
      {console.log(error);
    }
  }
 useEffect (() =>{
    obtenerContactos()
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Mi Agenda de Contactos</h1>
      {contactos.length === 0 ? (
        <p>Aun no hay contactos por mostrar</p>
      ) : (
        contactos.map((item) => (
          <ContactCard
            key={item.id}
            information={item} 
            eliminar={eliminarContacto}/>
        ))
      )
      }
      <Link to="/">
        <button className="btn btn-outline-secondary">or get Back to Contacts</button>
      </Link>
    </div>
  );
}; 