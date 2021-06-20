import React from "react";
import "./Testimonial.css";
import Avatar from "../../../assets/images/avatar.jpg";

const Testimonial = ({ testimonial }) => {
  const { name, description, reviewTime } = testimonial;
 
  return (
    <div className="border testimonial-card bg-white">
      <img src={Avatar} class="rounded-pill" alt={"..."} />
      <div className="card-body">
        <h5 className="card-title text-center p-2">{name}</h5>
        <blockquote className="card-text py-3 text-center">{description.slice(0, 165)}</blockquote>
        <p className="card-text">
          <small className="text-muted">{reviewTime.toString().slice(0, 10)}</small>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
