import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ContactCard } from "../components/ContactCard.jsx";

export const Agenda = () => {

  const { store, dispatch } = useGlobalReducer();
  const contactos = store.contacts || [];
  const slug = "varinia";

  const crearUsuario = async () => {
    try {
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`);
      if (resp.status === 404) {
        console.log("No existe la agenda");

        await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        console.log("Se creo la agenda");
      }
    } catch (error) {
      console.log("Error al traer o crear agenda");
    }
  };

  const obtenerContactos = async () => {
    try {
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`)
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
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
        method: "DELETE"
      });
      if (resp.ok) {
        dispatch({
          type: "delete_contact",
          payload: id
        });
        console.log("Se elimino el contacto");
        obtenerContactos();
      } else {
        console.log("No se elimino el contacto");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    (async () =>{
      await crearUsuario ();
      await obtenerContactos();
    })();
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
            eliminar={eliminarContacto} />
        ))
      )
      }
      <Link to="/">
        <button className="btn btn-outline-secondary">or get Back to Contacts</button>
      </Link>
    </div>
  );
}; 