import React, {useState} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from 'react-router-dom';

export const EditContact = () => {
  const { store, dispatch } = useGlobalReducer()

  let [data, setData] = useState({
    name: "", email: "", phone: "", address: "",
  })

  const navigate = useNavigate()
  const { contact_id } = useParams()
  const editarContacto = store.contact.find


  fetch("https://playground.4geeks.com/contact/agendas/varinia/contacts", {
            method: "PUT",
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
                    type: "edit_contact",
        ///            payload: NewContact
                })
                navigate("/")
            })
            .catch((error) => console.error("No se creo el contacto", error))
    }



}
