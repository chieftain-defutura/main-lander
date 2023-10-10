import React, { useRef } from "react";
import Slider from "react-slick";
import { ReactComponent as ChevronRight } from "../../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../../assets/icons/chevron-left.svg";
import InstituteVideo from "../../../assets/video/institute-video.mp4";
import "./Instagram.scss";

const InstagramPost: React.FC = () => {
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
      videoUrl: InstituteVideo,
    },
    {
      videoUrl: InstituteVideo,
    },
    {
      videoUrl: InstituteVideo,
    },
  ];
  return (
    <div className="instagramPost-wrapper">
      <div className="instagram-slider-content">
        <div
          className="arrow"
          style={{ cursor: "pointer" }}
          onClick={() => ref.current?.slickPrev()}
        >
          <ChevronLeft />
        </div>
        <div>
          <div className="insta-slick-slider-wrapper">
            <Slider ref={ref} {...settings}>
              {data.map((f, index) => (
                <div key={index} className="video-tag">
                  <video src={f.videoUrl} controls></video>
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

export default InstagramPost;
