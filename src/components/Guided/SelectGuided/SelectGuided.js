import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
import PlacesInfo from '../../Home/PlacesInfo/PlacesInfo';
import Loading from '../../Preloader/Loading';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './SelecGuided.css';

const SelectGuided = () => {
	const { id } = useParams();
	console.log(id);
	const [guided, setGuided] = useContext(userContext);

	useEffect(() => {
    const uri = `https://afternoon-savannah-22003.herokuapp.com/guidedList/${id}`;
    console.log(uri);
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setGuided(data[0]));
  }, [id]);
	console.log(guided);
	return (
		<>
			<Navbar/>
      {guided.length===0 && <Loading/>}
      {<div className="selected-guided-container">
          <div>
            <div className="guided-container">
              <h1 className="guided-bg-header">Select Your Places</h1>
            </div>
          </div>
          <div className="guided-info-card container selected-guided pb-5 mb-5">
            <div className="guided-img-card">
              <img src={guided.imageUrl} alt="" />
            </div>
            <div className="guided-info-container pl-5 ml-5">
              <h3 className="guided-info-h3">
                Hi,I'm{guided.name},Creative travel blogger
              </h3>
              <p>
                I Speak <samp>{guided.language}</samp>
              </p>
              <h4 className="guided-info-h4">{guided.country}</h4>
              <p className="guided-info-p">{guided.description}</p>
            </div>
          </div>
          <div className="selected-guided">
					<PlacesInfo/>
					<Footer/>
          </div>
        </div>}
    </>
  );
};

export default SelectGuided;