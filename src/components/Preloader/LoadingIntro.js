import React from 'react'
// import Spinner from '../../assets/preloader/Pulse-1s-200px.svg';
import Intro from '../../assets/preloader/intro.gif';
const LoadingIntro = () => {
	return (
    <>
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <img className="vh-100 vw-100" src={Intro} alt="" />
      </div>
    </>
  );
}

export default LoadingIntro
