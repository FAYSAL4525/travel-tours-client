import React from "react";
import Fade from "react-reveal/Fade";
import "./Contact.css";

const Contact = () => {
  const handleSend = () => {
    alert("Thank you..! We will contact you as soon as possible");
  };
	return (
    <section className="contact">
      <Fade bottom duration={2500} distance="40px">
        <h5 className="text-center mt-5 pt-5 brand-text "> Contact</h5>
        <h2 className="text-center mb-4 ">
          Let us handle your <br /> project, professionally
        </h2>

        <div className="d-flex justify-content-center p-3">
          <div className="form-area">
            <div className="d-flex justify-content-between">
              <input
                type="text"
                name="firstName"
                className="form-control mb-3 input-style"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                className="form-control mb-3 input-style d-inline"
                placeholder="Last Name"
              />
            </div>
            <div className="d-flex justify-content-between">
              <input
                type="text"
                name="email"
                className="form-control mb-3 input-style"
                placeholder="Email Address"
              />
              <input
                type="text"
                name="phone"
                className="form-control mb-3 input-style d-inline"
                placeholder="Phone Number"
              />
            </div>

            <textarea
              className="form-control mb-3 input-textarea"
              name="description"
              id=""
              rows="5"
              placeholder="Write your message"
            ></textarea>
            <div className="text-center mb-5">
              <button onClick={handleSend} className="btn btn-secondary  mt-3">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
