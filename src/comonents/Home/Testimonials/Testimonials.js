import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
// import './Testimonials.css';
// import wilson from '../../../images/wilson.png';
// import ema from '../../../images/ema.png';
// import aliza from '../../../images/aliza.png';


const Testimonials = () => {
	const [testimonialData, setTestiMonialData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/review')
			.then(res => res.json())
			.then(data => setTestiMonialData(data))
	},[])
	console.log(testimonialData);
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase text-center">Testimonial</h5>
						<h1 className='text-center'>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;