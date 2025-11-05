import { Link } from "react-router-dom";


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://cdn-icons-png.flaticon.com/512/10070/10070963.png" width="40" height="34" className="d-inline-block align-text-top" />
					"Inicio"
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link> */}
					<Link to="/addcontact">
						<button className="btn btn-secondary">Add Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};