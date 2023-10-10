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
              <a href="tel:+4435672539">
                <p>+91 44356 72539 / +91 44356 72539</p>
              </a>
            </div>
          </div>
          <div className="address-content">
            <div>
              <Mail />
            </div>
            <div>
              <a href="mailto:chief.literacies@dehustle.institute">
                <p>chief.literacies@dehustle.institute</p>
              </a>
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
