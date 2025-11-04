import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Mi lista de Contactos</h1>
			<p className="container">
				 <img src="https://www.papelaria.cl/cdn/shop/products/p-ocs-cb043-3-d2240b91-2b73-4d07-a19f-0aaa77456fd1_1200x.webp?v=1756994029" className="img-fluid rounded-start" alt="..."/>
			</p>
			
		</div>
	);
}; 