import React, { useEffect, useState } from 'react';
import PlacesCard from '../PlacesCard/PlacesCard';
import './PlacesInfo.css'
import styled from 'styled-components';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const StyledH1 = styled.h1`
    font-family: "Gilroy";
		line-heright: 1.5;
    letter-spacing: 1.15;
    font-size: 50px;
		font-weight:600;
`;

const PlacesInfo = () => {
	const [placesInfo, setPlacesInfo] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/touristplaces')
			.then(res => res.json())
			.then(data => setPlacesInfo(data))
	}, [])
	console.log(placesInfo);
	return (
		<div>
			{/* <Navbar></Navbar> */}
			<div className='container'>
				<div className="text-center p-5">
					<StyledH1>Find The Suitable Trip For You</StyledH1>
				</div>
				<div className='row  card-info mb-5 pb-5'>
					{
						placesInfo.map(info => <PlacesCard placesInfo={info}></PlacesCard>)
					}
				</div>
			</div>
		</div>
	);
};

export default PlacesInfo;