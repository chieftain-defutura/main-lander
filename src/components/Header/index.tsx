import React from "react";
import Logo from "../../assets/logos/header-logo.png";
import Access from "../../assets/icons/access.png";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="mx">
        <div className="header-wrapper">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="access">
            <img src={Access} alt="" />
            <p>Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
