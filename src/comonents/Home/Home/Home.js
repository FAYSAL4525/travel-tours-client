import React, { useContext } from 'react';
import { userContext } from '../../../App';
import Contact from '../../Shared/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import GuidedList from '../GuidedList/GuidedList';
import Header from '../Header/Header';
import PlacesInfo from '../PlacesInfo/PlacesInfo';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	return (
		<div>
			<Navbar userName={loggedInUser.name} success={loggedInUser.success}></Navbar>
			<Header></Header>
			<PlacesInfo></PlacesInfo>
			<GuidedList></GuidedList>
		  <Testimonials></Testimonials>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;