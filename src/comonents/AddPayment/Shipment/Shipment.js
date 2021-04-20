import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import ProcessPayment from '../ProcesssPayment/ProcessPayment';
// import Navbar from '../Shared/Navbar/Navbar';

const Shipment = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const [loggedInUser, setLoggedInUser, addBooking, setAddBooking] = useContext(userContext);

	const [bookData,setBookData] = useState(null);

	console.log(addBooking);

	const onSubmit = data => {
		console.log(addBooking);
		setBookData(data);
	};
	const handleProcessOrder = (paymentId) => {
		const orderDetails = {
			...loggedInUser,
			order: addBooking,
			shipment: bookData,
			paymentId:paymentId,
			orderTime: new Date()
		}
		console.log(orderDetails);
		fetch('http://localhost:5000/addBook', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(orderDetails)
		})
			.then(res => res.json())
			.then(data => {
				if (data) {
					// processOrder();
					alert('your order placed successfully')
				}
			})
	}
	return (
	<div className="row container">
			<div className="col-md-6">
				<div>
					<Navbar userName={loggedInUser.name} success={loggedInUser.success}></Navbar>
					<div style={{display:bookData ? 'none' : 'block'}} className='mt-5 pt-5'>
						<form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
							<input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
							{errors.name && <span className="error">Name is required</span>}

							<input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
							{errors.email && <span className="error">Email is required</span>}

							<input name="address" ref={register({ required: true })} placeholder="Your Address" />
							{errors.address && <span className="error">Address is required</span>}

							<input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
							{errors.phone && <span className="error">Phone Number is required</span>}
							<input className="submit" type="submit" />
						</form>
					</div>
				</div>
		</div>
			<div style={{ display: bookData ? 'block' : 'none' }}  className="col-md-6 pt-5 mt-5">
				<ProcessPayment handlePayment={handleProcessOrder}></ProcessPayment>
		</div>
	</div>
	);
};

export default Shipment;