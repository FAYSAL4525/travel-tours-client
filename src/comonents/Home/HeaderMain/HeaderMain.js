import React from 'react';
import './HeaderMain.css'
// import { Animated } from "react-animated-css";
import bannerImg_1 from '../../../images/bannerpic-1.jpg';
import bannerImg_2 from '../../../images/bannerpic-2.jpg';
import bannerImg_3 from '../../../images/bannerpic-3.jpg';

const HeaderMain = () => {
	return (
		<div id="carouselExampleDark" class="carousel carousel-white slide custom-carousel" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src={bannerImg_1} class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block text-box text-box-1">
						<h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>First slide label</h5>
						<p className="animated bounceInLeft" style={{ animationDelay: '2s' }}>Some representative placeholder content for the first slide.</p>
						<p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">More Info</a></p>
					</div>
				</div>
				<div class="carousel-item" >
					<img src={bannerImg_2} class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block text-box text-box-2">
						<h5 className="animated slideInDown" style={{ animationDelay: '1s' }}>Second slide label</h5>
						<p className="animated fadeInUp" style={{ animationDelay: '2s' }}>Some representative placeholder content for the second slide.</p>
						<p className="animated zoomIn" style={{ animationDelay: '3s' }}>
							<a href="#">More Info</a></p>
					</div>
				</div>
				<div class="carousel-item">
					<img src={bannerImg_3} class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block text-box text-box-3">
						<h5 className="animated zoomIn" style={{ animationDelay: '1s' }}>Third slide label</h5>
						<p className="animated fadeInLeft" style={{ animationDelay: '2s' }}>Some representative placeholder content for the third slide.</p>
						<p className="animated zoomIn" style={{ animationDelay: '3s' }}><a href="#">More Info</a></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;