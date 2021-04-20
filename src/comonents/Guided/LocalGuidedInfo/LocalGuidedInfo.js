import React from 'react';
import { Link } from 'react-router-dom';
import './LocalGuidedInfo.css'

const LocalGuidedInfo = ({ infoData }) => {
	const { name, country, description, imageUrl,_id } = infoData;
	console.log(infoData);
	return (
		<div>
			
			<div className="guided-info-card container pb-5 mb-5">
				<div className='guided-img-card'>
					<img src={imageUrl} alt="" />
				</div>
				<div className='guided-info-container pl-5 ml-5'>
					<h3 className='guided-info-h3'>{name}</h3>
					<h4 className='guided-info-h4'>{country}</h4>
					<p className='guided-info-p'>{description}</p>
					<Link to={"/selectGuided/" + _id}> <button className='btn btn-travel-with'>TRAVEL WITH ME</button></Link>
				</div>
			</div>
		</div>
	);
};

export default LocalGuidedInfo;