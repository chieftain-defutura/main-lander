import React from "react";
import { ReactComponent as OriginCircle } from "../../assets/images/originCircle.svg";
import InstituteVideo from "../../assets/video/institute-video.mp4";
import { OriginData } from "../../utils/data/OriginData";
import "./Origin.scss";

const Origin: React.FC = () => {
  return (
    <div className="origin-wrapper">
      <div className="mx pad">
        <div className="origin-container">
          <span>origin</span>
          <h2>
            See the handprints we've left on the process of our
            self-construction
          </h2>
          <p>
            A couple of years ago, two like-minded friends embarked on a journey
            to create a space for excellence. Driven by a shared vision, they
            gave rise to Dehustle Institute, dedicated to becoming a hub of
            talent and mastery.
          </p>
        </div>

        <div className="origin-content">
          <div className="first-item">
            <div className="bodrer-left"></div>
            {OriginData.map((f, index) => {
              return (
                <div key={index}>
                  <div className="flex-item">
                    <OriginCircle />
                    <p>{f.year}</p>
                  </div>
                  <div className="para">
                    <h2>{f.title}</h2>
                    <p>{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="second-item">
            <video src={InstituteVideo} controls></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Origin;
