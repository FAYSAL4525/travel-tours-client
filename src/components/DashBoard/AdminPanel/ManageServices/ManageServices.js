import React, { useEffect, useState } from "react";
import Delete from "../../../../assets/images/Group 33150.png";
import "./ManageServices.css";

const ManageServices = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/touristplaces")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
      });
  }, [places]);
  const handleDelete = (id) => {
    const uri = `https://afternoon-savannah-22003.herokuapp.com/delete/${id}`;
    fetch(uri, {
      method: "Delete",
    }).then((res) => res.json());
  };
  return (
    <section className="d-flex justify-content-center align-items-center h-auto w-100">
      <div className="row vw-100 justify-content-center">
        <div className="col-md-12 col-6  m-0 p-0">
          {places.length === 0 ? (
            <div className="text-center">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="table-responsive-sm admin-delete-booklist-table shadow bg-light rounded">
              <table className="table table-striped table-hover table-delete-booklist-admin ">
                <thead className="table-info">
                  <tr>
                    <th scope="col">Place Name</th>
                    <th scope="col">Trip Type</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {places.map((placeInfo) => (
                  <tbody>
                    <tr>
                      <td>{placeInfo.name} </td>
                      <td>{placeInfo.triptype} </td>
                      <td>{placeInfo.price} </td>
                      <td>
                        <button className="delete-btn">
                          <img
                            onClick={() => handleDelete(placeInfo._id)}
                            src={Delete}
                            alt=""
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
