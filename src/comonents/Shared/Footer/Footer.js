import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const noNamed = [
		{
			name: "Media & Press Room"
		},
		{ name: "General Travel Conditions" },
		{ name: "Video Series" },
		{ name: "Privacy Policy (GDPR)" },
		{ name: "Cookies" },
	]
	const ourAddress = [
		{ name: "Start Live Chat" },
		{ name: "info@demo.com" },

	]
	const oralHealth = [
		{ name: "Meet Our Local Guide", link: "/emergency" },
		{ name: "Video Series", link: "/checkup" },
		{ name: " Personal Blog ", link: "/personal-treatment" },
		{ name: "Media & Press Room", link: "/tooth-extract" },
	]
	const services = [
		{
			name: "Our Travel Blog"
		},
		{ name: "Video Series" },
		{ name: "Meet Our Local Guide" },
		{ name: "Travel Now!" },
		{ name: "FAQ" },
	]
	return (
		<footer className="footer-area clear-both">
			<div className="container pt-5">
				<div className="row py-5">
					<FooterCol key={1} menuTitle={"Media"} menuItems={noNamed} />
					<FooterCol  menuTitle="Services" menuItems={services} />
					<FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
					<FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
						<ul className="social-media list-inline">
							<li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
							<li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
							<li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
						</ul>
						<div className="mt-5">
							<h6>Call now</h6>
							<button className="btn btn-primary">+2025550295</button>
						</div>
					</FooterCol>
				</div>
				<div className="copyRight text-center">
					<p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
				</div>
			</div>
		</footer>

	);
};

export default Footer;