import React, { useRef } from "react";
import Slider from "react-slick";
import { ReactComponent as ChevronRight } from "../../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../../assets/icons/chevron-left.svg";
import TwitterImgOne from "../../../assets/images/twitter-img-1.jpg";
// import TwitterImgTwo from "../../../assets/images/twitter-img-2.jpg";
// import TwitterImgThree from "../../../assets/images/twitter-img-3.jpg";
import "./Twitter.scss";

const Twitter: React.FC = () => {
  const ref = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      image: TwitterImgOne,
    },
  ];
  return (
    <div className="twitter-wrapper">
      <div className="twitter-slider-content">
        <div
          className="arrow"
          style={{ cursor: "pointer" }}
          onClick={() => ref.current?.slickPrev()}
        >
          <ChevronLeft />
        </div>
        <div>
          <div className="twitter-slick-slider-wrapper">
            <Slider ref={ref} {...settings}>
              {data.map((f, index) => (
                <div key={index} className="twitter-img">
                  <img src={f.image} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div
          className="arrow"
          style={{ cursor: "pointer" }}
          onClick={() => ref.current?.slickNext()}
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Twitter;
