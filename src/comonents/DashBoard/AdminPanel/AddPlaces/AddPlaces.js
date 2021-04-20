
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../../App';
import './AddPlaces.css'

const AddPlaces = () => {

	const [imageURL, setImageURL] = useState(null);
	const [description, setDescription] = useState('');
	const { register, handleSubmit, watch, errors } = useForm();
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	const handleChange = e => {
		const value = e.target.value;
		setDescription(value);
		// console.log(value);
	}
	// console.log(description);
	const onSubmit = data => {
		const eventData = {
			name: data.name,
			description: description,
			triptype: data.triptype,
			location: data.location,
			daytime: data.daytime,
			nighttime: data.nighttime,
			price: data.price,
			imageUrl: imageURL
		}
		const newData = {...loggedInUser,...eventData }
		// console.log(eventData);
		alert('submit sucess')

		const uri = `http://localhost:5000/addPlaces`;
		fetch(uri, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newData)

		})
			.then(res => console.log("object"))
	}
	const handleImageUpload = event => {
		// console.log(event.target.files);
		const imageData = new FormData();
		imageData.set('key', '5da74151113aff51f90ff24f96689da2');
		imageData.append('image', event.target.files[0]);

		axios.post('https://api.imgbb.com/1/upload', imageData)
			.then(function (response) {
				setImageURL(response.data.data.display_url);
			})
			.catch(function (error) {
				// console.log(error);
			});
	}
	return (
		<form className="p-5" onSubmit={handleSubmit(onSubmit)}>
			<div className="row justify-content-center mb-3">
				<div className="form-outline col-md-6">
					<label className="form-label fst-normal" for="name" class="form-label">Tourist Place Name</label>
					<input className="form-control" type="text" name="name" placeholder="Tourist Place Name" ref={register} required />

				</div>
			</div>
			<div className="row justify-content-center mb-3">
				<div class="col-md-6">
					<label for="description" class="description pb-2 fst-normal">Description</label>
					<textarea onBlur={handleChange} class="form-control" name="description" rows="3 required"></textarea>
				</div>
			</div>
			<div className="row mb-3 justify-content-center">
				<div className="form-group col-md-3">
					<label for="triptype" class="form-label">Trip-Type</label>
					<input className="form-control" type="text" name="triptype" placeholder="Trip-Type" ref={register} required />
				</div>

				<div className="form-group col-md-3">
					<label for="location" class="form-label fst-normal">Location</label>
					<input className="form-control" type="text" name="location" placeholder="Location" ref={register} required />
				</div>
			</div>
			<div className="row mb-3 justify-content-center">
				<div className="form-group col-md-3">
					<label className="form-label fst-normal" for="daytime" class="form-label">Stay Day Time</label>
					<input className="form-control" name="daytime" placeholder="3" ref={register} required />
				</div>

				<div className="form-group col-md-3">
					<label for="nighttime" class="form-label fst-normal"> Stay Night time</label>
					<input className="form-control" type="text" name="nighttime" placeholder="2" ref={register} required />
				</div>
			</div>
			<div className="row mb-3 justify-content-center">
				<div className="form-group col-md-3">
					<label for="price" class="form-label fst-normal">Price</label>
					<input className="form-control" type="text" name="price" placeholder="price" ref={register} required />
				</div>

				<div className="form-group col-md-3 img">
					<label for="file" class="form-label fst-normal">Upload Your Image</label>
						<label className="label" for="file">
							<i className="fas fa-image"></i>&nbsp;Choose a Photo
                    </label>
					<input className="form-control" onChange={handleImageUpload} name="imageURL" id="file" type='file' ref={register} />
				
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="form-group  col-md-4 ms-auto">
					<button type="submit" className="btn">Send</button>
				</div>
			</div>
		</form>

	);
};

export default AddPlaces;