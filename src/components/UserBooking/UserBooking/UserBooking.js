import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import UserBookingDetails from '../UserBookingDetails/UserBookingDetails';

const UserBooking = () => {
	const [bookDetails, setBookDetails] = useState([]);
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/addBookings?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setBookDetails(data);
      });
  }, [loggedInUser.email]);

	return (
		<div>
			<Navbar userName={loggedInUser.name} success={loggedInUser.success}></Navbar>
			<div className="order-item">
				{
					bookDetails.map((bookItem, index) => <UserBookingDetails bookItem={bookItem.order} key={index}></UserBookingDetails>)
				}
			</div>
		</div>
	);
};

export default UserBooking;