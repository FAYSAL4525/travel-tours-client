import React, { useContext } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { HashRouter, Link, NavLink, Router, useHistory } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	return (
		<div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
			<ul className="list-unstyled">
				<li>
					<a href="/home" className="text-white mt-5 pt-5" >
						<FontAwesomeIcon icon={faGripHorizontal} /> <span>Home</span>
					</a>
				</li>
				<li>
					<Link to="/dashboard/addAdmin" className="text-white">
						<FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Admin</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/addPlaces" className="text-white">
						<FontAwesomeIcon icon={faCalendar} /> <span>Add Places</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/AddGuided" className="text-white">
						<FontAwesomeIcon icon={faUsers} /> <span>Add Guided</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/ManageServices" className="text-white">
						<FontAwesomeIcon icon={faFileAlt} /> <span>Manage Services</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/Admin/booklist" className="text-white">
						<FontAwesomeIcon icon={faFileAlt} /> <span>Manage Book List</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/review" className="text-white">
						<FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/userBooking" className="text-white" >
						<FontAwesomeIcon icon={faCog} /> <span>User Booking</span>
					</Link>
				</li>
			</ul>
			<div>
				<Link onClick={() => setLoggedInUser({})} to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
			</div>
		</div>
	);
};

export default Sidebar;