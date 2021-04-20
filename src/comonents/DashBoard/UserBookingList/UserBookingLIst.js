import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import UserBookDetail from '../UserBookListDetail/UserBookDetail';

const UserBookingLIst = () => {
	const [bookCart, setBookCart] = useState([]);
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	useEffect(() => {
		fetch('http://localhost:5000/addBookings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: loggedInUser.email })
		})
			.then(res => res.json())
			.then(data => setBookCart(data))
	}, [bookCart])
	console.log(bookCart);
	return (
		<div style={{width:'70%',align:'right'}} className='guided-carusel user=-booking-card pt-5 mt-5 ms-5'>
			{
				bookCart.map((bookItem, index) => <UserBookDetail bookItem={bookItem.order} key={index}></UserBookDetail>)
			}
		</div>
	);
};

export default UserBookingLIst;