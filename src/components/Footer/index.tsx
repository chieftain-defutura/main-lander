import React from "react";
import { ReactComponent as Location } from "../../assets/icons/map-pin.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import FooterLogo from "../../assets/logos/footer-logo.png";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="mx pad">
        <div className="footer-container">
          <div className="footer-img">
            <img src={FooterLogo} alt="" />
          </div>
          <div className="address-content">
            <div>
              <Location />
            </div>
            <div className="address">
              <p>#1, VOC Street, Mahalaxmi Nagar,</p>
              <p>East Tambaram, Selaiyur Post, Tamilnadu - 600 059, India.</p>
            </div>
          </div>
          <div className="address-content">
            <div>
              <Phone />
            </div>
            <div>
              <p>+91 44356 72539 / +91 44356 72539</p>
            </div>
          </div>
          <div className="address-content">
            <div>
              <Mail />
            </div>
            <div>
              <p>connect@dewallstreet.capital</p>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>Terms & policies | Connect</p>
          <p>Copyright © 2022 Dehustle ® All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
