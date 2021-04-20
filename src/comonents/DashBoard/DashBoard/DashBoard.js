import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { userContext } from '../../../App';
import AddGuided from '../AdminPanel/AddGuided/AddGuided';
import Navbar from '../../Shared/Navbar/Navbar';
import AddAdmin from '../AdminPanel/AddAdmin/AddAdmin';
import AddPlaces from '../AdminPanel/AddPlaces/AddPlaces';
import ManageServices from '../AdminPanel/ManageServices/ManageServices';
import Review from '../Review/Review';
import Sidebar from '../Sidebar/Sidebar';
import UserBooking from '../../UserBooking/UserBooking/UserBooking';
import UserBookingLIst from '../UserBookingList/UserBookingLIst';
import BookList from '../AdminPanel/BookList/BookList';

const DashBoard = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	return (
		<div className="row">
			<Navbar userName={loggedInUser.name} success={loggedInUser.success}></Navbar>
			<Router>
				<div className="col-md-2">
					<Sidebar></Sidebar>
				</div>
				<div className="col-md-10">
					<Switch>
						<Route path='/dashboard/AddAdmin'>
							<AddAdmin></AddAdmin>
						</Route>
						<Route path='/dashboard/addPlaces'>
							<AddPlaces></AddPlaces>
						</Route>
						<Route path='/dashboard/addGuided'>
							<AddGuided></AddGuided>
						</Route>
						<Route path='/dashboard/ManageServices'>
							<ManageServices></ManageServices>
						</Route>
						<Route path='/dashboard/review'>
							<Review></Review>
						</Route>
						<Route path='/dashboard/userBooking'>
							<UserBookingLIst></UserBookingLIst>
						</Route>
						<Route path='/dashboard/Admin/booklist'>
							<BookList></BookList>
						</Route>
					</Switch>
				</div>
		</Router>
		</div>
	);
};

export default DashBoard;