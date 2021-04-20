import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { userContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import PlacesInfo from '../PlacesInfo/PlacesInfo';
import './PlacesReview.css'


const PlacesReview = () => {
	const [loggedInUser, setLoggedInUser, addBookIng, setAddBookIng] = useContext(userContext);
	const { key } = useParams();
	const history = useHistory();
	const [booking, setBooking] = useState([]);

	useEffect(() => {

		const uri = `http://localhost:5000/touristplaces/${key}`
		console.log(uri);
		fetch(uri)
			.then(res => res.json())
			.then(data => setBooking(data))
	}, [booking])
	console.log(booking);
	const handleCheckOut = (bookData) => {
		setAddBookIng(bookData);
		history.push('/addPayment');
	}
	return (
		<div>
			<Navbar userName={loggedInUser.name} success={loggedInUser.success}></Navbar>
			<div className="mt-5 table-container">
				{
					booking.map(booking =>
						<div>
							<div>
								<div style={{ backgroundImage: `Url(${booking.imageUrl})`}} className='guided-container'>
									<h1 className="guided-bg-header booking-bg-name">{booking.name}</h1>
								</div>
							</div>
							<div className="row container ms-5 ps-5 h-50 pt-5 mt-5 pb-5 mt-5">
								<div className="col-md-6">
									{booking.description}
								</div>
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-6">
											<p>{booking.triptype}</p><br />
											<p>{booking.location}</p><br />
											<p>{booking.price}</p>
										</div>
										<div className="col-md-6">
											<p>{booking.name}</p><br />
											<p>{booking.name}</p>
											<button onClick={() => handleCheckOut(booking)} className="btn btn-book mt-4 " type="button">Book Now</button>
										</div>
									</div>
								</div>
							</div>
							<div className="selected-guided">
								<PlacesInfo></PlacesInfo>
								<Footer></Footer>
							</div>
						</div>	
					)}
			</div>	
		</div>
	);
};

export default PlacesReview;