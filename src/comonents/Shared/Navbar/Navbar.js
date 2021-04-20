import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Navbar.css';

const Navbar = (props) => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	return (
		<div>
			<nav className="navbar  navbar-expand-lg navbar-light container-fluid active fixed-top ps-5 pe-5">
				<div className="container-fluid p-0 nvbar">
					<a className="navbar-brand nav-brand" href="#">TRAVEL TOURS</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto nav-link">
							<Link to="/home">Home</Link>
							<Link to="/guided">Guided</Link>
							<Link to="/dashboard">Dashboard</Link>
							<Link to="/aboutUs">About Us</Link>
							{props.success ? <h4 style={{ display: "inline-block pe-3" }}>{props.userName}</h4> : <Link className="active" to="/login">Login</Link>}
							{/* {
								props.success &&
								<button onClick={() => setLoggedInUser({})}><i className="fas fa-sign-out-alt "></i></button>
							} */}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;