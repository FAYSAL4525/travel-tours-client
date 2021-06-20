import React from "react";
import { Link } from "react-router-dom";
import "./GuidedInfo.css";

const GuidedInfo = ({ guidedInfo }) => {
  const { name, country, description, imageUrl, _id, language } = guidedInfo;

  return (
    <div id={_id} className="item-box-blog card-height bg-light">
      <div className="item-box-blog-image ">
        <img className="img-fluid" alt="" src={imageUrl} />
      </div>
      <div className="p-2">
        <div className="text-info fw-bold fs-5 text-center">
          <p>{name}</p>
        </div>
        <div className="fw-bold fs-5 text-center">{country}</div>
        <div className="fw-bolder text-center">
          <p>I Can Speak {language}</p>
        </div>
        <div className="text-justify text-secondary guided-description">
          <p>{description.slice(0, 135)}</p>
        </div>
        <div className="d-lg-flex justify-content-center mb-3">
          <Link to={"/selectGuided/" + _id}>
            <button className="btn btn-success">TRAVEL WITH ME</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuidedInfo;
