import React, { useEffect, useState } from "react";
import "./BookList.css";

const BookList = () => {
  // const [bookCart, setBookCart] = useState([]);

  const [orderList, setOrderList] = useState([]);
  const [itemId, setItemId] = useState(null);
  //  const [tatus, setTatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/addBookings")
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
        setLoading(false);
      });
  }, [orderList]);

  const handleGetId = (id) => {
    setItemId(id);
  };

  const handleStatusChange = (e) => {
    const status = { value: e.target.value };
    updateStatus(status);
    //  setTatus(status);
  };

  const updateStatus = (status) => {
    fetch(`https://afternoon-savannah-22003.herokuapp.com/update/${itemId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("status modified successfully");
        }
      });
  };

  return (
    <section
      className="admin-booklist d-flex justify-content-center align-items-center h-auto w-100"
      style={{ margin: 0, padding: 0 }}
    >
      <div className="row vw-100 justify-content-center">
        <div className="col-md-12 col-6  m-0 p-0">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="table-responsive-sm admin-booklist-table shadow bg-light rounded">
              <table className="table table-striped table-hover table-booklist-admin ">
                <thead>
                  <tr>
                    <th className="fs-3" colspan="7">
                      Order List
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                    <th scope="col">Pay with</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Status Modify</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList?.map((bookItem) => (
                    <tr>
                      <td>{bookItem.order.name} </td>
                      <td>{bookItem.order.email}</td>
                      <td>{bookItem.order.triptype} </td>
                      <td>Credit Card</td>
                      <td>{bookItem.order.price} </td>

                      {/* <td>{bookItem.order.service}</td> */}

                      <td>{bookItem.status}</td>
                      <td>
                        <select
                          onChange={handleStatusChange}
                          onFocus={() => handleGetId(`${bookItem._id}`)}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option
                            className="bg-info text-white text-center"
                            value="pending"
                          >
                            Pending
                          </option>
                          <option
                            className="bg-warning text-white text-center"
                            value="onGoing"
                          >
                            On going
                          </option>
                          <option
                            className="bg-success text-white text-center"
                            value="Done"
                          >
                            Done
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookList;
