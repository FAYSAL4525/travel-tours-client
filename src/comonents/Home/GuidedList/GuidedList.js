import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import GuidedInfo from '../GuidedInfo/GuidedInfo';
import Carousel from 'react-elastic-carousel';
import LocalGuidedInfo from '../../Guided/LocalGuidedInfo/LocalGuidedInfo';
import './GuidedList.css'
const GuidedList = () => {
	const [guided, setGuided] = useState([]);
	const [guidedInfo, setGuidedInfo] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/guidedList')
			.then(res => res.json())
			.then(data => setGuided(data))

	}, []);

	console.log(guided);
	return (
		<div>
			<div className='guided-carusel pe-5 ps-5'>
				{
					guided.map(info => <GuidedInfo guidedInfo={info} >

					</GuidedInfo>)
				}
			</div>
		</div>
	);
};

export default GuidedList;