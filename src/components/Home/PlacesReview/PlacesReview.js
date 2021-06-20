import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { userContext } from "../../../App";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Fade from "react-reveal/Fade";
import PlacesInfo from "../PlacesInfo/PlacesInfo";
import "./PlacesReview.css";

const PlacesReview = () => {
  const [loggedInUser, setLoggedInUser, addBookIng, setAddBookIng] =
    useContext(userContext);
  const { key } = useParams();
  const history = useHistory();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const uri = `https://afternoon-savannah-22003.herokuapp.com/touristplaces/${key}`;
    console.log(uri);
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [key]);
  
  const handleCheckOut = (bookData) => {
    setAddBookIng(bookData);
    history.push("/addPayment");
  };
  return (
    <>
      <Navbar
        userName={loggedInUser.name}
        success={loggedInUser.success}
      ></Navbar>
      <Fade bottom duration={2500} distance="40px">
        <div className="table-container">
          {booking.map((booking) => (
            <div>
              <div>
                <div
                  style={{
                    backgroundImage: `Url(${booking.imageUrl})`,
                    backgroundSize: "cover",
                  }}
                  className="place-review-container"
                >
                  <h1 className="guided-bg-header booking-bg-name">
                    {booking.name}
                  </h1>
                </div>
              </div>
              <div className="row container justify-content-center mt-5 place-description">
                <div className="col-12 col-md-6 ">
                  <span className="fs-5">Description</span>
                  <br></br>
                  {booking.description}
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <p>
                        <span className="fs-5">Trip Type</span>
                        <br></br>
                        {booking.triptype}
                      </p>
                      <br />
                      <p>
                        <span className="fs-5">Location</span>
                        <br></br>
                        {booking.location}
                      </p>
                      <br />
                      <p>
                        <span className="fs-5">Price</span>
                        <br></br>
                        {booking.price}
                      </p>
                    </div>
                    <div className="col-12 col-md-6">
                      <p>
                        <span className="fs-5">Name</span>
                        <br></br>
                        {booking.name}
                      </p>
                      <br />
                      <p>{booking.name}</p>
                      <br></br>
                      <br></br>
                      <button
                        onClick={() => handleCheckOut(booking)}
                        className="btn btn-book mt-4 "
                        type="button"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="selected-guided">
                <PlacesInfo></PlacesInfo>
                <Footer></Footer>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </>
  );
};

export default PlacesReview;
