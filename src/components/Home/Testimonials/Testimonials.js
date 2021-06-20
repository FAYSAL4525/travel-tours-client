import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "swiper/components/pagination";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

SwiperCore.use([Pagination, Autoplay]);
const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="testimonials p-md-3">
      <Fade bottom duration={2500} distance="40px">
        <div className="my-5 py-4">
          <div className="review-title text-center">
            <span>What Our Clients Says</span>
            <h2>Testimonials</h2>
          </div>
          {loading ? (
            <div className="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper swiper-testimonial"
              >
                {Reviews.map((testimonial) => {
                  return (
                    <SwiperSlide className="swiperSlide" id={testimonial._id}>
                      <Testimonial testimonial={testimonial} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
      </Fade>
    </section>
  );
};

export default Testimonials;
