import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../AddPlaces/AddPlaces.css';

const AddGuided = () => {
	const [imageURL, setImageURL] = useState(null);
	const [description, setDescription] = useState('');
	const { register, handleSubmit} = useForm();

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
		const uri = `https://afternoon-savannah-22003.herokuapp.com/addGuided`;
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
    <section>
      <div className="add-places-container d-flex justify-content-center align-items-center">
        <form
          className="add-places-form shadow rounded bg-light p-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row mb-3 justify-content-center">
            <div className="form-group col-md-6">
              <label for="name" className="form-label">
                Guided Name
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                ref={register}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label for="language" className="form-label fst-normal">
                Language
              </label>
              <input
                className="form-control"
                type="text"
                name="language"
                placeholder="Language"
                ref={register}
                required
              />
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div className="col-md-12">
              <label for="description" className="description pb-2 fst-normal">
                Description
              </label>
              <textarea
                onBlur={handleChange}
                className="form-control"
                name="description"
                rows="3 required"
              ></textarea>
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="form-group col-md-6">
              <label for="country" className="form-label fst-normal">
                Country
              </label>
              <input
                className="form-control"
                type="text"
                name="country"
                placeholder="Country"
                ref={register}
                required
              />
            </div>

            <div className="form-group col-md-6 img">
              <label for="file" className="form-label fst-normal">
                Upload Your Image
              </label>
              <label className="label" for="file">
                <i className="fas fa-image"></i>&nbsp;Choose a Photo
              </label>
              <input
                className="form-control"
                onChange={handleImageUpload}
                name="imageURL"
                id="file"
                type="file"
                ref={register}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="form-group  col-md-2 ms-auto">
              <button type="submit" className="btn btn-success">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddGuided;