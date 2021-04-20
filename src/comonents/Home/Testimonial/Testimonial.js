import React from 'react';

const Testimonial = (props) => {
	const { name, description, reviewTime} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{name}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src='' alt="" width="60"/>
                <div>
						<h6 className="text-primary">{description}</h6>
					             	<p className="m-0">{reviewTime}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;