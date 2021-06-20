import React, {  useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../../App";
import Profile from "../../Profile/Profile";
import "./Navbar.css";

const Navbar = () => {
	const [isSticky, setSticky] = useState(true);
	const [loggedInUser] = useContext(userContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 398) {
        setSticky(false);
      } else {
        setSticky(true);
      }
    });
  }, [loggedInUser]);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  container-fluid   ps-5 pe-5 fixed-top ${
          isSticky ? "navbar-light " : "collapse-active"
        }`}
      >
        <div className="container-fluid p-0 nvbar">
          <Link className="navbar-brand nav-brand" to="/">
            TRAVEL TOURS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className={`${isSticky ? "navbar-toggler-icon" : "toggle-icon"}`}
            ></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div
              className={`navbar-nav ms-auto nav-link ${
                isSticky ? "nav-item-light" : "nav-item"
              }`}
            >
              <NavLink
                activeStyle={{
                  color: "tomato",
                }}
                onClick={() => window.scrollTo(500, 0)}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "tomato",
                }}
                to="/guided"
              >
                Guided
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "tomato",
                }}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "tomato",
                }}
                to="/aboutUs"
              >
                About Us
              </NavLink>
              {loggedInUser.success ? (
                <NavLink>
                  <Profile />
                </NavLink>
              ) : (
                <NavLink
                  activeStyle={{
                    color: "tomato",
                  }}
                  className="active-login"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
