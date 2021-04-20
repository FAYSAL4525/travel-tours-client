import React, { useEffect, useState } from 'react';
import Delete from '../../../../images/Group 33150.png';
import './ManageServices.css'

const ManageServices = () => {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/touristplaces')
			.then(res => res.json())
			.then(data => {
				setPlaces(data);

			})

	}, [places])
	const handleDelete = (id) => {
			const uri = `http://localhost:5000/delete/${id}`
			fetch(uri, {
				method: 'Delete'
			})
				.then(res => res.json())
	}
	console.log(places);
	return (
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
					places.map(placeInfo =>
						<tbody>
							<tr>
								<td>{placeInfo.name} </td>
								<td>{placeInfo.triptype} </td>
								<td>{placeInfo.price} </td>
								<td><button className="delete-btn"><img onClick={() => handleDelete(placeInfo._id)} src={Delete} alt="" /></button></td>
							</tr>
						</tbody>)}
			</table>
		</div>
	);
};

export default ManageServices;