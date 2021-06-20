import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { userContext } from "../App";
import AddGuided from "../components/DashBoard/AdminPanel/AddGuided/AddGuided";
import AddAdmin from "../components/DashBoard/AdminPanel/AddAdmin/AddAdmin";
import AddPlaces from "../components/DashBoard/AdminPanel/AddPlaces/AddPlaces";
import ManageServices from "../components/DashBoard/AdminPanel/ManageServices/ManageServices";
import Review from "../components/DashBoard/Review/Review";
import Sidebar from "../components/DashBoard/Sidebar/Sidebar";
import UserBookingLIst from "../components/DashBoard/UserBookingList/UserBookingLIst";
import BookList from "../components/DashBoard/AdminPanel/BookList/BookList";


const DashBoard = () => {
  const { isAdmin } = useContext(userContext);
  let history = useHistory();
  const home = () => {
    history.push("/home");
    console.log("javed");
  };

  return (
    <>
      <Router>
        <div
          style={{ background: "#d5e4d0"}}
          className="row m-0 p-0 vw-100 vh-100"
        >
          <div className="col-1 col-md-3 m-0 p-0">
            <Sidebar isHome={home} isAdmin={isAdmin}></Sidebar>
          </div>
          <div className="col-8 m-0 p-0 d-flex justify-content-center align-items-center">
            <Switch>
              <Route path="/dashboard/AddAdmin">
                <AddAdmin></AddAdmin>
              </Route>
              <Route path="/dashboard/addPlaces">
                <AddPlaces></AddPlaces>
              </Route>
              <Route path="/dashboard/addGuided">
                <AddGuided></AddGuided>
              </Route>
              <Route path="/dashboard/ManageServices">
                <ManageServices></ManageServices>
              </Route>
              <Route path="/dashboard/review">
                <Review></Review>
              </Route>
              <Route path="/dashboard/userBooking">
                <UserBookingLIst></UserBookingLIst>
              </Route>
              <Route path="/dashboard/Admin/booklist">
                <BookList></BookList>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default DashBoard;
