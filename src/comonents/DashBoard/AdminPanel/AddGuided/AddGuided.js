import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './AddGuided.css'

const AddGuided = () => {
	const [imageURL, setImageURL] = useState(null);
	const [description, setDescription] = useState('');
	const { register, handleSubmit, watch, errors } = useForm();

	const handleChange = e => {
		const value = e.target.value;
		setDescription(value);
	}
	const onSubmit = data => {
	
		const eventData = {
			name: data.name,
			language: data.language,
			description: description,
		  country: data.country,
			imageUrl: imageURL
		}
		console.log(eventData);
		const newData = {...eventData }
		// console.log(eventData);
		alert('submit sucess')
    console.log(newData);
		const uri = `http://localhost:5000/addGuided`;
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
		<section className='pt-5 mt-5'>
			<form className="p-5" onSubmit={handleSubmit(onSubmit)}>
				<div className="row mb-3 justify-content-center">
					<div className="form-group col-md-3">
						<label for="name" class="form-label">Guided Name</label>
						<input className="form-control" type="text" name="name" placeholder="Name" ref={register} required />
					</div>

					<div className="form-group col-md-3">
						<label for="language" class="form-label fst-normal">Language</label>
						<input className="form-control" type="text" name="language" placeholder="Language" ref={register} required />
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
						<label for="country" class="form-label fst-normal">Country</label>
						<input className="form-control" type="text" name="country" placeholder="Country" ref={register} required />
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
	</section>
	);
};

export default AddGuided;