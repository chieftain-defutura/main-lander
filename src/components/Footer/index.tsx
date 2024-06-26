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
              <Location width={20} height={20} />
            </div>
            <div className="address">
              <p>
                Jalani Towers,No.1, Plot No.2-A, Gandhi Main Road, Shankar
                Nagar, Pammal, Chennai-600 075
              </p>
              {/* <p>East Tambaram, Selaiyur Post, Tamilnadu - 600 059, India.</p> */}
            </div>
          </div>
          <div className="address-content">
            <div>
              <Phone width={20} height={20} />
            </div>
            <div>
              <a href="tel:+9884017684">
                <p>+918428224546 / +919884017684</p>
              </a>
            </div>
          </div>
          <div className="address-content">
            <div>
              <Mail width={20} height={20} />
            </div>
            <div>
              <a href="mailto:chief.literacies@dehustle.institute">
                <p>chief.literacies@dehustle.institute</p>
              </a>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & conditions
          </a>
          <a href="/refund-policy" target="_blank" rel="noopener noreferrer">
            Refund Policy
          </a>
          <p>Copyright © 2022 Dehustle ® All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
