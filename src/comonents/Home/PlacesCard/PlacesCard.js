import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import './PlacesCard.css'

// const Container = styled(animated.div)`
// display: inline-block;
// padding: 3em;
// background: #C7D2FE66;
// border-radius: 10px;
// z-index: 1;
// position: relative;
// backdrop-filter: blur(10px);
// border: 2px solid transparent;
// background-clip: border-box;
// cursor: pointer;
// `;
const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;
    border-radius: 50%;
`;

const StyledH3 = styled.h5`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 70, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const PlacesCard = ({ placesInfo }) => {

	const { name, description, triptype, location, daytime, nighttime,
		price, imageUrl,_id } = placesInfo;

	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 250, friction: 40 } }))


	return (
		<animated.div className="card-container"
			onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{
				transform: props.xys.interpolate(trans)
			}}
		>
			{/* <StyledImg src={profile} /> */}

			<img className="col-md-12 mt-2 mb-2 card-img" src={imageUrl} alt="" />
			<h4 className='heading pt-0 mt-0'>{name}</h4>
			<h5 className="description-area">{description}</h5>
			<div className="row event-area">
				<div className="col-md-4">Trip Type <br /><p style={{display:"inline-block"}} className="text-secondary text-center">{triptype}</p></div>
				<div className="col-md-4">ServiceLevel<br /><p className="text-secondary">Premium</p></div>
				<div className="col-md-4">Location<br /><p className="text-secondary text-center">{triptype}</p></div>
			</div>
			<div className="row m-0 mt-1 explore">
				<div className="col-md-6 text-center">
					<Link to={"/placeReview/" + _id}><button className="btn mt-3 me-5 pe-3 btn-explore">Explore</button></Link>
				</div>
				<div className="col-md-6 p-2 text-center ms-">From<br /><p className="price-area mt-0 pt-0 ">${price}</p></div>
			</div>
		</animated.div>
	);
};

export default PlacesCard;