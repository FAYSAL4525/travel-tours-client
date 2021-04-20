import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import './Review.css'

const Review = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const [loggedInUser, setLoggedInUser, addBooking, setAddBooking] = useContext(userContext);

	const [description, setDescription] = useState('');

	const handleChange = e => {
		const value = e.target.value;
		// const newDescription = { ...description, value };
		setDescription(value);
		// console.log(value);
	}

	const onSubmit = data => {
		const orderDetails = {
			...loggedInUser,
			review: data,
			description: description,
			reviewTime: new Date()
		}
		// console.log(orderDetails);
		fetch('http://localhost:5000/review', {
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

	};

	return (
		<div className="row container">
			<div className="col-md-12">
				<div className='mt-5 pt-5'>
					<form class="form-control" className="ship-form" onSubmit={handleSubmit(onSubmit)}>
						<div className="row justify-content-center mb-3">
							<div class="col-md-6">
								<label for="description" class="description pb-2 fst-normal">Description</label>
								<input class="form-control" name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
								{errors.name && <span className="error">Name is required</span>}
							</div>
						</div>

						{/* <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
							{errors.email && <span className="error">Email is required</span>} */}
						<div className="row justify-content-center mb-3">
							<div class="col-md-6">
								<label for="description" class="description pb-2 fst-normal">Description</label>
								<input class="form-control" name="address" ref={register({ required: true })} placeholder="Your Address" />
								{errors.address && <span className="error">Company Name,Destination</span>}
							</div>
						</div>
						<div className="row justify-content-center mb-3">
							<div class="col-md-6">
								<label for="description" class="description pb-2 fst-normal">Description</label>
								<input class="form-control" name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
								{errors.phone && <span className="error">Phone Number is required</span>}
							</div>
						</div>

						<div className="row justify-content-center mb-3">
							<div class="col-md-6">
								<label for="description" class="description pb-2 fst-normal">Description</label>
								<textarea onBlur={handleChange} class="form-control" name="description" rows="3 required"></textarea>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="form-group  col-md-4 ms-auto">
								<input className="btn" type="submit" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div >
	);
};

export default Review;