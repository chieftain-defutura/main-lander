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
              <a href="tel:+4435672539">
                <p>+91 7305151795 / +91 44356 72539</p>
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
          <p>Terms & policies</p>
          <p>Copyright © 2022 Dehustle ® All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
