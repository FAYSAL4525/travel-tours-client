import React from 'react';

const UserBookDetail = (props) => {
	const { name, description, location, daytime, nighttime,imageUrl,} = props.bookItem;
	console.log(props.bookItem);
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
				<div className="fw-bold">{location}</div>
				<div class="item-box-blog-data">
					<p>{daytime}</p>
				</div>
				<div class="item-box-blog-text text-justify text-secondary">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default UserBookDetail;