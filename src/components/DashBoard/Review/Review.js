import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../../App";
import "./Review.css";

const Review = () => {
  const { register, handleSubmit, errors } = useForm();

  const [loggedInUser, setLoggedInUser] =
    useContext(userContext);

  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // const newDescription = { ...description, value };
    setDescription(value);
    // console.log(value);
  };

  const onSubmit = (data) => {
    const orderDetails = {
      ...loggedInUser,
      review: data,
      description: description,
      reviewTime: new Date(),
    };

    fetch("https://afternoon-savannah-22003.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // processOrder();
          alert("your order placed successfully");
        }
      });
  };

  return (
		<div className="row container justify-content-center align-content-center ">
      <div className="col-md-12">
        <div className="pt-3">
          <form
            className="form-control bordered ship-form bg-light"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row justify-content-center mb-3">
              <div className="col-md-6">
                <label
                  for="description"
                  className="description pt-4 pb-2 fst-normal"
                >
                  Name
                </label>
                <input
                  className="form-control"
                  name="name"
                  defaultValue={loggedInUser.name}
                  ref={register({ required: true })}
                  placeholder="Your Name"
                />
                {errors.name && <span className="error">Name is required</span>}
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-md-6">
                <label
                  for="description"
                  className="description pb-2 fst-normal"
                >
                  Address
                </label>
                <input
                  className="form-control"
                  name="address"
                  ref={register({ required: true })}
                  placeholder="Your Address"
                />
                {errors.address && (
                  <span className="error">Company Name,Destination</span>
                )}
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-md-6">
                <label
                  for="description"
                  className="description pb-2 fst-normal"
                >
                  Phone Number
                </label>
                <input
                  className="form-control"
                  name="phone"
                  ref={register({ required: true })}
                  placeholder="Your Phone Number"
                />
                {errors.phone && (
                  <span className="error">Phone Number is required</span>
                )}
              </div>
            </div>

            <div className="row justify-content-center mb-3">
              <div className="col-md-6">
                <label
                  for="description"
                  className="description pb-2 fst-normal"
                >
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

            <div className="row justify-content-center">
              <div className="form-group  col-md-4 ms-auto">
                <input className="btn btn-success" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
