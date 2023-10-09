import React from "react";
import Arrow from "../../assets/icons/Arrow.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";

import "./Hero.scss";
import HeroSlider from "../Slider/HeroSlider";

const Hero = () => {
  const render = (
    <div className="social-media">
      <p>Follow us on</p>
      <div className="icons">
        <Instagram />
        <Linkedin />
        <Twitter />
      </div>
    </div>
  );
  return (
    <div className="hero-container">
      <div className="mx">
        <div className="hero-wrapper">
          <div className="container-one">
            <div className="content">
              <h2>
                Who values your <span>future</span>?
              </h2>
              <p>
                We do, You landed on a perfect platform for shaping your future.
                So, why wait? Start your training journey today, to create a
                path towards a brighter and more promising future. Get trained
                from now for your upgraded tomorrow. 
              </p>
              <div className="enroll">
                <h5>Enroll now</h5>
                <img src={Arrow} alt="" />
              </div>
            </div>
            <div className="links">{render}</div>
          </div>
          <div className="container-two">
            <HeroSlider />
          </div>
          <div className="media-links">{render}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
