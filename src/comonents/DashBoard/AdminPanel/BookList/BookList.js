import React, { useContext, useEffect, useState } from 'react';

const BookList = () => {
	const [bookCart, setBookCart] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/addBookings')
			.then(res => res.json())
			.then(data => setBookCart(data))
	}, [bookCart])

	// console.log(bookCart);

	return (
		<div className='guided-carusel pt-5 mt-5 ms-5'>
			<div className="delete-event-container mt-5 pt-5 container">
				<table class="table table-striped table-hover tb m-0">
					<thead className="table-info">
						<tr>
							<th scope="col">Place Name</th>
							<th scope="col">Trip Type</th>
							<th scope="col">Price</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					{
						bookCart.map(bookItem =>
							<tbody>
								<tr>
									<td>{bookItem.order.name} </td>
									<td>{bookItem.order.triptype} </td>
									<td>{bookItem.order.price} </td>
								</tr>
							</tbody>)}
				</table>
			</div>

		</div>
	);
};

export default BookList;