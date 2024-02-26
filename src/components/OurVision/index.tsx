import React from "react";
import ImageOne from "../../assets/images/de-img.jpg";
import ImageTwo from "../../assets/images/image-2.png";
import { ReactComponent as SchoolPlanner } from "../../assets/icons/school-planner-svgrepo-com 1.svg";
import { ReactComponent as Graduate } from "../../assets/icons/graduate-cap-svgrepo-com 2.svg";
import { ReactComponent as School } from "../../assets/icons/school-svgrepo-com (1) 1.svg";
import { ReactComponent as Certificate } from "../../assets/icons/certificate-svgrepo-com 1.svg";
import "./OurVision.scss";
import { OurMissionData } from "../../utils/data/OurMissionData";

const OurVision: React.FC = () => {
  return (
    <div className="ourVision-wrapper">
      <div className="mx pad">
        <div className="ourVision-container">
          <div className="ourVision-head">
            <h2>Our vision.</h2>
            <h5>
              <span>“DECENTRALIZATION”</span>
            </h5>
            <div className="responsive-image">
              <img src={ImageOne} alt="" />
            </div>
            <p>
              "To liberate the native youths of nations, to become emotionally
              intelligent, financially secure and physically significant and
              stand just for not their lands, but to transcend beyond the
              borders, biases and human limits to transform the planet"
            </p>
          </div>
          <div className="image">
            <img src={ImageOne} alt="" />
          </div>
        </div>
        <div className="our-mission-wrpper">
          <div className="image">
            <img src={ImageTwo} alt="" />
          </div>
          <div className="our-mission-content">
            <h2>Our mission.</h2>
            <div className="responsive_image">
              <img src={ImageTwo} alt="" />
            </div>
            <div className="our-mission-container">
              <h1>01</h1>
              <p style={{ marginBottom: "4px" }}>
                To establish various institutional units not limited to,
              </p>
              <div className="flex-content">
                <div>
                  <div className="flex-item">
                    <SchoolPlanner />
                    <p>Academies</p>
                  </div>
                  <div className="flex-item" style={{ marginTop: "12px" }}>
                    <School />
                    <p>Academies</p>
                  </div>
                </div>
                <div>
                  <div className="flex-item">
                    <Graduate />
                    <p>Academies</p>
                  </div>
                  <div className="flex-item" style={{ marginTop: "12px" }}>
                    <Certificate />
                    <p>Academies</p>
                  </div>
                </div>
              </div>
              <p style={{ marginTop: "4px" }}>
                and enhance quality education in through leveraging advanced
                technologies in the Edtech sector.
              </p>
            </div>
            {OurMissionData.map((f, index) => {
              return (
                <div key={index} className="our-mission-container">
                  <h1>{f.number}</h1>
                  <p>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
