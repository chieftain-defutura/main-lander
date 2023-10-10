import React, { useState } from "react";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInImg } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterImg } from "../../assets/icons/twitter.svg";
import "./SocialMedia.scss";
import InstagramPost from "./InstagramPost";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

const SocialMedia: React.FC = () => {
  const [isActive, setisActive] = useState("instagram");
  const [active, setActive] = useState(0);
  return (
    <div className="social-media-wrapper">
      <div className="mx pad">
        <div className="social-media-container">
          <h4>
            <span>SOCIAL MEDIA</span>
          </h4>
          <h2>Follow our online crew for daily fun & learning.</h2>
        </div>
        <div className="social-media-flex-content">
          <div onClick={() => setisActive("instagram")}>
            <div className="flex-item" onClick={() => setActive(0)}>
              <Instagram />
              <p style={{ color: active === 0 ? "#fff" : "#777777" }}>
                Instagram
              </p>
            </div>
          </div>
          <div onClick={() => setisActive("linkedIn")}>
            <div className="flex-item" onClick={() => setActive(1)}>
              <LinkedInImg />
              <p style={{ color: active === 1 ? "#fff" : "#777777" }}>
                LinkedIn
              </p>
            </div>
          </div>
          <div onClick={() => setisActive("twitter")}>
            <div className="flex-item" onClick={() => setActive(2)}>
              <TwitterImg />
              <p style={{ color: active === 2 ? "#fff" : "#777777" }}>
                Twitter
              </p>
            </div>
          </div>
        </div>
        <div className="boder-bottom"></div>
        {isActive === "instagram" && (
          <div>
            <InstagramPost />
          </div>
        )}
        {isActive === "linkedIn" && (
          <div>
            <LinkedIn />
          </div>
        )}
        {isActive === "twitter" && (
          <div>
            <Twitter />
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
