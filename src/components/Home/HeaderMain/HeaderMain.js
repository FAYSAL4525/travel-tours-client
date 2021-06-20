import React from "react";
import "./HeaderMain.css";
import bannerImg_1 from "../../../assets/images/bannerpic-1.jpg";
import bannerImg_2 from "../../../assets/images/bannerpic-2.jpg";
import bannerImg_3 from "../../../assets/images/bannerpic-3.jpg";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner m-0 p-0">
          <div className="carousel-item active">
            <img src={bannerImg_1} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: "1s" }}
              >
                “Cover the earth before it covers you.”
              </h5>
              <p
                className="animated bounceInLeft"
                style={{ animationDelay: "2s" }}
              >
                “Life is either a daring adventure or nothing.”
              </p>
              <p
                className="animated bounceInRight"
                style={{ animationDelay: "3s" }}
              >
                <Link to="/aboutUs">More Info</Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bannerImg_2} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated zoomIn" style={{ animationDelay: "1s" }}>
                “The journey matters more than the destination.”
              </h5>
              <p
                className="animated fadeInLeft"
                style={{ animationDelay: "2s" }}
              >
                “So shut up, live, travel, adventure, bless, and don’t be
                sorry.”
              </p>
              <p className="animated zoomIn" style={{ animationDelay: "3s" }}>
                <Link>More Info</Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bannerImg_3} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated zoomIn" style={{ animationDelay: "1s" }}>
                “Adventure is not outside man; it is within.”
              </h5>
              <p
                className="animated fadeInLeft"
                style={{ animationDelay: "2s" }}
              >
                “Never fear quarrels, but seek hazardous adventures.”
              </p>
              <p className="animated zoomIn" style={{ animationDelay: "3s" }}>
                <Link>More Info</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
