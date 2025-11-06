import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Home = () => {


	const { store, dispatch } = useGlobalReducer()

	return (
		<div className=" listaDeContactos text-center mt-5">
			<h1>Mi lista de Contactos</h1>
			<div className="principal container position-relative d-inline-block">
				<img src="https://www.papelaria.cl/cdn/shop/products/p-ocs-cb043-3-d2240b91-2b73-4d07-a19f-0aaa77456fd1_1200x.webp?v=175699402" className="img-fluid rounded-start" alt="..." />
				<Link to="/agenda">
					<button className="btn btn-secondary btn-lg btn-overlay">View Contacts</button>
				</Link>
			</div>

		</div>
	);
}; 