import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/icons/whatsapp-icon.svg";
import Logo from "../../assets/logos/header-logo.png";
import Access from "../../assets/icons/access.png";
import AccessTwo from "../../assets/images/access-two.png";
import "./Header.scss";
import LayoutModule from "../layoutModule";
import { Link } from "react-router-dom";

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
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="navigation-content">
              <Link to="/">
                <p style={{ color: "#fff" }}>Home</p>
              </Link>
              <a
                href="https://charter-lander.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p>Charter</p>
              </a>
              <a
                href="https://www.workshop.dehustle.institute/"
                target="_blank"
                rel="noreferrer"
              >
                <p>Workshop</p>
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
        <Link to="/">
          <p>Home</p>
        </Link>
        <a
          href="https://charter-lander.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Charter</p>
        </a>
        <a
          href="https://www.workshop.dehustle.institute/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Workshop</p>
        </a>
        <a href="https://results-dehustle-institute.netlify.app/">
          View Results
        </a>
      </div>
      {active && (
        <LayoutModule handleToggle={handleToggle} className="layout-module">
          <div className="close-icon" onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className="access-img">
            <img src={AccessTwo} alt="" />
          </div>
          <div className="input-wrapper">
            <div className="input-container">
              <label htmlFor="">Student ID</label>
              <div className="student-id">
                <UserIcon />
                <input type="text" placeholder="Student ID" />
              </div>
            </div>
            <div className="input-container" style={{ margin: "24px 0" }}>
              <label htmlFor="">Password</label>
              <div className="student-id">
                <LockIcon />
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <div className="login-btn">
              <button>Log in</button>
            </div>
            <div className="account-wrapper">
              <p>Don’t have an account?</p>
              <a
                href="https://charter-lander.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p style={{ color: "#00A140" }}>Enroll now!</p>
              </a>
            </div>
          </div>
        </LayoutModule>
      )}
      <div className="whatsapp-icon">
        <a href="https://wa.me/7305151795" target="_blank" rel="noreferrer">
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
};

export default Header;
