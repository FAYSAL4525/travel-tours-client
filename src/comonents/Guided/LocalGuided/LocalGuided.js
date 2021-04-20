import React, { useContext, useEffect, useState } from 'react';
import './LocalGuided.css'
import LocalGuidedInfo from '../LocalGuidedInfo/LocalGuidedInfo';
import Footer from '../../Shared/Footer/Footer';
import { userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';


const LocalGuided = () => {
	const [guided, setGuided] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/guidedList')
			.then(res => res.json())
			.then(data => setGuided(data))
	}, []);
	return (
		<div>
			<Navbar></Navbar>
			<div className='guided-container'>
				<h1 className="guided-bg-header">Local Guide</h1>
			</div>
			<div className="meet-expert">
				<h1 className="meet-expert-header">Meet Our Local Experts</h1>
				<p className="meet-description">Here at Travel Tours we believe that every unique adventure starts with local expertise and knowledge, and therefore builds our entire operation.</p>
			</div>
			<div className="container">
				{
					guided.map(infoData => <LocalGuidedInfo infoData={infoData}></LocalGuidedInfo>)
				}
			</div>
			<div className="pt-5 mt-5">
				<Footer></Footer>
			</div>

		</div>
	);
};

export default LocalGuided;