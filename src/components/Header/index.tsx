import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import Logo from "../../assets/logos/header-logo.png";
import Access from "../../assets/icons/access.png";
import Arrow from "../../assets/icons/Arrow.svg";
import "./Header.scss";
import LayoutModule from "../layoutModule";

const Header: React.FC = () => {
  const [active, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };
  return (
    <>
      <div className="header-container">
        <div className="mx">
          <div className="header-wrapper">
            <div className="image">
              <img src={Logo} alt="" />
            </div>
            <div className="navigation-content">
              <a href="#over-view">
                <p>Overview</p>
              </a>
              <a href="#impacts">
                <p>Impacts</p>
              </a>
              <a href="#origin">
                <p>Origin</p>
              </a>
              <a href="#capabilities">
                <p>Capabilities</p>
              </a>
            </div>
            <div className="access" onClick={handleToggle}>
              <img src={Access} alt="" />
              <p>Access</p>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-header-navigation">
        <a href="#over-view">
          <p>Overview</p>
        </a>
        <a href="#impacts">
          <p>Impacts</p>
        </a>
        <a href="#origin">
          <p>Origin</p>
        </a>
        <a href="#capabilities">
          <p>Capabilities</p>
        </a>
      </div>
      {active && (
        <LayoutModule handleToggle={handleToggle} className="layout-module">
          <div className="close-icon" onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className="access-modal">
            <div className="responsive-img">
              <img src={Access} alt="" className="responsive-access-img" />
            </div>
            <h2>Enroll now to get access.</h2>
            <img src={Access} alt="" className="access-img" />
          </div>
          <a
            href="https://charter-lander.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="enroll">
              <h5>Enroll now!</h5>
              <img src={Arrow} alt="" />
            </div>
          </a>
        </LayoutModule>
      )}
    </>
  );
};

export default Header;
