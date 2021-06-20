import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import '../../Home/PlacesInfo/PlacesInfo.css';
import UserBookDetail from '../UserBookListDetail/UserBookDetail';

const UserBookingLIst = () => {
	const [bookCart, setBookCart] = useState([]);
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
	
	useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/addBookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setBookCart(data));
  }, [loggedInUser]);


	return (
    <div className="card-info h-100 w-100">
      {bookCart.map((bookItem, index) => (
        <UserBookDetail
          bookItem={bookItem}
          status={bookItem}
          key={index}
        ></UserBookDetail>
      ))}
    </div>
  );
};

export default UserBookingLIst;