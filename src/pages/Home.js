import React from 'react';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import GuidedList from '../components/Home/GuidedList/GuidedList';
import Header from '../components/Home/Header/Header';
import PlacesInfo from '../components/Home/PlacesInfo/PlacesInfo';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Contact from '../components/Home/Contact/Contact';

const Home = () => {

	return (
    <>
      <div className="h-auto">
        <Navbar></Navbar>
        <Header></Header>
        <PlacesInfo></PlacesInfo>
        <GuidedList></GuidedList>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;