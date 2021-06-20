import React from 'react'
import Intro from "../../assets/preloader/loading.gif";

const Loading = () => {
	return (
    <>
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <img className="vh-100 vw-100" src={Intro} alt="" />
      </div>
    </>
  );
}

export default Loading
