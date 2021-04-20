import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './App.css';
import Home from './comonents/Home/Home/Home';
import { createContext, useState } from "react";
import PrivateRoute from "./comonents/LogIn/PrivateRoute/PrivateRoute";
import LogIn from "./comonents/LogIn/LogIn/LogIn";
import LocalGuided from "./comonents/Guided/LocalGuided/LocalGuided";
import SelectGuided from "./comonents/Guided/SelectGuided/SelectGuided";
import PlacesReview from "./comonents/Home/PlacesReview/PlacesReview";
import UserBooking from "./comonents/UserBooking/UserBooking/UserBooking";
import Shipment from "./comonents/AddPayment/Shipment/Shipment";
import AddPlaces from "./comonents/DashBoard/AdminPanel/AddPlaces/AddPlaces";
import DashBoard from "./comonents/DashBoard/DashBoard/DashBoard";
import AboutUs from "./comonents/AboutUs/AboutUs";

export const userContext = createContext();

function App() {

	const [loggedInUser, setLoggedInUser] = useState([]);
	const [addBookIng, setAddBookIng] = useState([]);
	const [guided, setGuided] = useState([]);
	return (
		<userContext.Provider value={[loggedInUser, setLoggedInUser, addBookIng, setAddBookIng, guided, setGuided]}>
			<Router>
				{/* <Navbar></Navbar> */}
				<Switch>
					<Route path='/home'>
						<Home></Home>
						</Route>
						<Route path='/login'>
						<LogIn></LogIn>
						</Route>
					<PrivateRoute path='/add'>
						<AddPlaces></AddPlaces>
					</PrivateRoute>
					<Route path='/guided'>
						<LocalGuided></LocalGuided>
					</Route>
					<Route path='/selectGuided/:id'>
						<SelectGuided></SelectGuided>
					</Route>
					<Route path='/placeReview/:key'>
						<PlacesReview></PlacesReview>
					</Route>
					<PrivateRoute path="/addPayment">
						<Shipment></Shipment>
					</PrivateRoute>
					<PrivateRoute path='/bookableplaces'>
						<UserBooking></UserBooking>
					</PrivateRoute>
					<PrivateRoute path='/dashboard'>
						<DashBoard></DashBoard>
					</PrivateRoute>
					<Route path='/aboutUs'>
						<AboutUs></AboutUs>
					</Route>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='*'>

					</Route>
				</Switch>
			</Router>
		</userContext.Provider>

	);
}

export default App;
