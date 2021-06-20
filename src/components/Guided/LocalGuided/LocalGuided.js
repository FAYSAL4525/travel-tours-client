import React, { useEffect, useState } from "react";
import Loading from "../../Preloader/Loading";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import LocalGuidedInfo from "../LocalGuidedInfo/LocalGuidedInfo";
import "./LocalGuided.css";

const LocalGuided = () => {
  const [guided, setGuided] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/guidedList")
      .then((res) => res.json())
      .then((data) => setGuided(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      {guided.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div className="guided-container">
            <h1 className="guided-bg-header">Local Guide</h1>
          </div>
          <div className="meet-expert">
            <h1 className="meet-expert-header">Meet Our Local Experts</h1>
            <p className="meet-description">
              Here at Travel Tours we believe that every unique adventure starts
              with local expertise and knowledge, and therefore builds our
              entire operation.
            </p>
          </div>
          <div className="container">
            {guided.map((infoData) => (
              <LocalGuidedInfo
                key={infoData._id}
               infoData={infoData}
              ></LocalGuidedInfo>
            ))}
          </div>
          <div className="pt-5 mt-5">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalGuided;
