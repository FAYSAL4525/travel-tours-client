import React, { useEffect, useState } from "react";
import GuidedInfo from "../GuidedInfo/GuidedInfo";
import Fade from "react-reveal/Fade";
import "./GuidedList.css";
const GuidedList = () => {
	const [guided, setGuided] = useState([]);
	const [sliceGuided, setSliceGuided] = useState([]);
  const [isExplore, setIsExplore] = useState(false);
  useEffect(() => {
    fetch("https://afternoon-savannah-22003.herokuapp.com/guidedList")
      .then((res) => res.json())
			.then((data) => {
				setGuided(data);
				const newData = data.slice(0,3);
				setSliceGuided(newData);
			});
  }, []);

  return (
    <Fade bottom duration={2500} distance="40px">
      <h1 className="local-guided-hading">Meet Our Local Guides</h1>
      <div className="p-5">
        {isExplore ? (
          <div className="row guided-carusel m-0 ">
            {guided?.map((info, index) => (
              <GuidedInfo guidedInfo={info} key={index}></GuidedInfo>
            ))}
          </div>
        ) : (
          <div className="row guided-carusel m-0">
            {sliceGuided.map((info) => (
              <GuidedInfo guidedInfo={info}></GuidedInfo>
            ))}
          </div>
        )}
        <div className="d-flex justify-content-center align-items-center">
          {!isExplore && (
            <button
              onClick={() => setIsExplore(true)}
              className="btn btn-info text-white"
            >
              Explore More
            </button>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default GuidedList;
