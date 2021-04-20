import React from 'react';
import { Link } from 'react-router-dom';
import './GuidedInfo.css'

const GuidedInfo = ({ guidedInfo }) => {
	const { name, country, description, imageUrl, _id ,language} = guidedInfo;
	console.log(guidedInfo);
	return (
		<div class="item-box-blog card-height">
			<div class="item-box-blog-image">

				<figure> <img className="" alt="" src={imageUrl} /></figure>
			</div>
			<div class="item-box-blog-body">
				<div class="item-box-blog-heading fw-bold">
					<a href="#" tabindex="0">
						<h5>{name}</h5>
					</a>
				</div>
				<div className="fw-bold">{ country}</div>
				<div class="item-box-blog-data">
					<p>I Can Speak { language}</p>
				</div>
				<div class="item-box-blog-text text-justify text-secondary">
					<p>{description}</p>
				</div>
				<div> 	<Link to={"/selectGuided/" + _id}> <button className='btn mt-3 me-5 pe-2 btn-explore'>TRAVEL WITH ME</button></Link></div>
			</div>
		</div>

	);
};

export default GuidedInfo;