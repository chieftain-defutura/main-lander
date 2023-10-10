import React from "react";
import { ReactComponent as Arrow } from "../../assets/icons/Arrow.svg";
import { ReactComponent as Seat } from "../../assets/icons/seat-svgrepo-com 1.svg";
import { ReactComponent as StopWatch } from "../../assets/icons/stopwatch-svgrepo-com 1.svg";
import { ReactComponent as BooksBook } from "../../assets/icons/books-book-svgrepo-com 1.svg";
import ImageThree from "../../assets/images/image-3.png";
import ImageFour from "../../assets/images/image-4.png";
import ImageFive from "../../assets/images/image-5.png";
import "./Capabilities.scss";

const Capabilities: React.FC = () => {
  return (
    <div className="capabilities-wrapper" id="capabilities">
      <div className="mx pad">
        <div className="capabilities-container">
          <h4>
            <span>CAPABILITIES</span>
          </h4>
          <p>
            No matter where you are in your educational journey, we have
            well-structured programs for you. Whether you're in school, college,
            seeking higher education, looking to enhance skills, planning to
            enter into a career,  preparing for entrance exams, our Student
            Academy and Professional Academy have a well-designed curriculum for
            everyone.
          </p>
        </div>
        <div className="capabilities-content">
          <h2>Student Academy.</h2>
          <div className="grid-item">
            <div className="content">
              <div className="student-img">
                <img src={ImageThree} alt="" />
              </div>
              <h3>STATE BOARD</h3>
              <div className="classes-content">
                <div>
                  <h4>I - IX</h4>
                  <p>coaching classes.</p>
                </div>
                <div>
                  <h4>IX - XII</h4>
                  <p>Special classes.</p>
                </div>
                <div>
                  <h4>X - XII</h4>
                  <p>Practical classes.</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="student-img">
                <img src={ImageFour} alt="" />
              </div>
              <h3>CBSE</h3>
              <div className="classes-content">
                <div>
                  <h4>I - IX</h4>
                  <p>coaching classes.</p>
                </div>
                <div>
                  <h4>IX - XII</h4>
                  <p>Special classes.</p>
                </div>
                <div>
                  <h4>X - XII</h4>
                  <p>Practical classes.</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://charter-lander.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="know-more-btn"
          >
            <p>Know more</p>
            <Arrow />
          </a>
        </div>
        <div className="professional-wrapper">
          <h2>Professional academy.</h2>
          <div className="professional-grid-item">
            <div className="image">
              <img src={ImageFive} alt="" />
            </div>
            <div className="second-content">
              <div className="head">
                <h4>Fullstack Engineering Web3 course.</h4>
                <p>
                  Bridge the gap between tech and innovation in our immersive
                  Fullstack Engineering Web3 course!
                </p>
              </div>
              <div className="grid-items">
                <div className="flex-item">
                  <div>
                    <Seat />
                  </div>
                  <div>
                    <p>Seats LEFT</p>
                    <h3>15 seats only</h3>
                  </div>
                </div>
                <div className="flex-item responsive">
                  <div>
                    <StopWatch />
                  </div>
                  <div>
                    <p>Admission CLOSES in</p>
                    <h3>09d 02h 01m</h3>
                  </div>
                </div>
              </div>
              <div className="flex-item" style={{ marginTop: "24px" }}>
                <div>
                  <BooksBook />
                </div>
                <div>
                  <p>COURSE DURATION</p>
                  <h3>09 months</h3>
                </div>
              </div>
              <div className="enroll-now">
                <button>Enroll now !</button>
              </div>
            </div>
          </div>
          <a
            href="https://charter-lander.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="know-more-btn"
          >
            <p>Know more</p>
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
