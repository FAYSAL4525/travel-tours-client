import React from 'react';
import '../../Home/PlacesCard/PlacesCard.css';

const UserBookDetail = ({ bookItem }) => {
	const { name, imageUrl, price } = bookItem.order;
	
  console.log(bookItem.order);
  console.log(bookItem);
  return (
    <>
      <div
        style={{ height: "370px", marginTop: "60px" }}
        className="card-container bg-white"
      >
        {/* <StyledImg src={profile} /> */}

        <div className="row">
          <div className="col-12 ">
            <img
              className="col-md-12 border-box card-img m-0 p-0"
              src={imageUrl}
              alt=""
            />
            <h4 className="heading  p-2  mt-3">{name}</h4>
            {/* <p className="text-justify mt-1 mb-2 pe-3 me-1 ms-1 ps-3">
              {description.slice(0, 80)}
            </p> */}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-between m-0 mt-1 ps-3 pe-3 explore">
          <div className=" text-center">
            <button className="btn btn-secondary mt-3 me-5 pe-3 ">
              {bookItem.status}
            </button>
          </div>
          <div className="p-2 text-center">
            Price
            <br />
            <p className="price-area mt-0 pt-0 ">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBookDetail;