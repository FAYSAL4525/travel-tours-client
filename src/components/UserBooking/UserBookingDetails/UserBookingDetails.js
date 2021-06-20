import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 70, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const UserBookingDetails = ({ bookItem }) => {
	console.log(bookItem);
	const { name, description, triptype, price, imageUrl, _id } = bookItem;

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
				<div className="col-md-4">Trip Type <br /><p style={{ display: "inline-block" }} className="text-secondary text-center">{triptype}</p></div>
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

export default UserBookingDetails;