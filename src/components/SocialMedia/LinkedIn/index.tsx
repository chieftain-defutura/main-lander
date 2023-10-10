import React, { useRef } from "react";
import Slider from "react-slick";
import { ReactComponent as ChevronRight } from "../../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../../assets/icons/chevron-left.svg";
import MadhuImg from "../../../assets/images/madhu.jpg";
import "./Linked.scss";

const LinkedIn: React.FC = () => {
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
      image: MadhuImg,
    },
  ];
  return (
    <div className="linkedin-wrapper">
      <div className="linkedin-slider-content">
        <div
          className="arrow"
          style={{ cursor: "pointer" }}
          onClick={() => ref.current?.slickPrev()}
        >
          <ChevronLeft />
        </div>
        <div>
          <div className="linkedin-slick-slider-wrapper">
            <Slider ref={ref} {...settings}>
              {data.map((f, index) => (
                <div key={index} className="image-content">
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

export default LinkedIn;
