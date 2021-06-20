import React from "react";
import Fade from "react-reveal/Fade";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const travelDestination = [
    { name: "United Arab Emirates", link: "/UAE" },
    { name: "United Kingdom", link: "/UK" },
    { name: "Australia", link: "/Australia" },
    { name: "Maldives", link: "/Maldives" },
    { name: "Turkey", link: "/Turkey" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const information = [
    { name: "Miles", link: "/miles" },
    { name: "About US", link: "/checkup" },
    { name: "Online Query", link: "/personal-treatment" },
    { name: "Become Partner", link: "/tooth-extract" },
    { name: "Terms And Condition", link: "/checkup" },
  ];
  const adventures = [
    { name: "The Dead Man", link: "/dead-man" },
    { name: "The Cursed", link: "/cursed" },
    { name: "Rock Climbing", link: "/rock-climbing" },
    { name: "sea", link: "/sea" },
    { name: "Hiking", link: "/Hiking" },
    { name: "Surface", link: "/Surface" },
  ];
	return (
    <footer className="footer-area clear-both">
      <Fade bottom duration={2500} distance="40px">
        <div className="container pt-5">
          <div className="row py-5">
            <FooterCol
              key={1}
              menuTitle={"Travel Destinations"}
              menuItems={travelDestination}
            />
            <FooterCol key={2} menuTitle="Adventures" menuItems={adventures} />
            <FooterCol
              key={3}
              menuTitle="Information"
              menuItems={information}
            />
            <FooterCol
              key={4}
              menuTitle="Address & Contact"
              menuItems={ourAddress}
            >
              <ul className="social-media list-inline">
                <li className="list-inline-item">
                  <a href="//facebook.com">
                    <FontAwesomeIcon
                      className="icon active-icon"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="//google.com">
                    <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="//instagram.com">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <h6>Call now</h6>
                <button className="btn btn-primary">+2025550295</button>
              </div>
            </FooterCol>
          </div>
          <div className="copyRight text-center">
            <p>
              Copyright {new Date().getFullYear()} All Rights Reserved,Faysal
            </p>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
