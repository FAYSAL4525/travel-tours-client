import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import PlacesCard from "../PlacesCard/PlacesCard";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./PlacesInfo.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay,EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay,EffectCoverflow, Pagination]);

const StyledH1 = styled.h1`
  font-family: "Gilroy";
  line-heright: 1.5;
  letter-spacing: 1.15;
  font-size: 50px;
  font-weight: 600;
`;

const PlacesInfo = () => {
  const [placesInfo, setPlacesInfo] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/touristplaces")
      .then((res) => res.json())
      .then((data) => setPlacesInfo(data));
  }, [placesInfo]);

  return (
    <>
      <Fade bottom duration={2500} distance="40px">
        {placesInfo.length === 0 ? (
          <div className="text-center">
            <div className="spinner-border text-success " role="status">
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="vw-100 container mt-5 justify-content-center">
            <div className="col-12 text-center p-5">
              <StyledH1>Find The Suitable Trip For You</StyledH1>
            </div>
            <div className="col-12 card-info mb-5 pb-5">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={"auto"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                className="mySwiper"
              >
                {placesInfo.map((info) => {
                  return (
                    <SwiperSlide id={info._id}>
                      <PlacesCard key={info._id} placesInfo={info}></PlacesCard>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        )}
      </Fade>
    </>
  );
};

export default PlacesInfo;
