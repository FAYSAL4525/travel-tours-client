import React from "react";
import { Link } from "react-router-dom";
// import { useSpring, animated } from "react-spring";
import "./PlacesCard.css";

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 50,
//   (x - window.innerWidth / 2) / 70,
//   1,
// ];
// const trans = (x, y, s) =>
//   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PlacesCard = ({ placesInfo }) => {
  const { name, description, triptype, price, imageUrl, _id } = placesInfo;

  // const [props, set] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 250, friction: 40 },
  // }));

  return (
    <>
      <div className="card-container">
        <div className="row">
          <div className="col-12">
            <img
              className="col-md-12 border-box card-img m-0 p-0"
              src={imageUrl}
              alt=""
            />
          </div>
          <div className="pe-4 ps-4">
            <div className="col-12 pe-2 ps-2">
              <h4 className="heading  p-0  mt-3">{name}</h4>
              <p className="description-area text-secondary mt-1 mb-2 ">
                {description.slice(0, 111)}
              </p>
            </div>

            <div className="row event-area">
              <div className="col-6 col-md-4">
                Trip Type <br />
                <p
                  style={{ display: "inline-block" }}
                  className="text-secondary text-center"
                >
                  {triptype}
                </p>
              </div>
              <div className="col-6 col-md-4">
                ServiceLevel
                <br />
                <p className="text-secondary">Premium</p>
              </div>
              <div className="col-12 col-md-4">
                Location
                <br />
                <p className="text-secondary text-center">{triptype}</p>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-between m-0 mt-1 explore">
              <div className=" text-center">
                <Link to={"/placeReview/" + _id}>
                  <button className="btn mt-3 me-5 pe-3 btn-explore">
                    Explore
                  </button>
                </Link>
              </div>
              <div className="p-2 text-center">
                Price
                <br />
                <p className="price-area mt-0 pt-0 ">${price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacesCard;
