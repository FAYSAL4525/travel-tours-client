import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const AboutUs = () => {
	return (
    <>
      <Navbar></Navbar>
      <div className="d-flex justify-content-center align-items-center" style={{height:"500px",}}>
        <h1>This is about us page</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;