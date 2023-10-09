import React, { useRef } from "react";
import { ReactComponent as TropyIcon } from "../../assets/icons/tropyIcon.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron-left.svg";
import { SuccessStoriesData } from "../../utils/data/SuccessStoriesData";
import Slider from "react-slick";
import "./SuccessStories.scss";

const SuccessStory: React.FC<{
  image: string;
  name: string;
  class: string;
  description: string;
  schoolTopper: string;
  year: string;
}> = ({ image, name, class: className, description, schoolTopper, year }) => {
  return (
    <div className="success-story">
      <div className="profile-img">
        <img src={image} alt={name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>{className}</p>
        <p style={{ marginTop: "24px", letterSpacing: "0.28px" }}>
          {description}
        </p>
        <div className="school-topper-text">
          <div className="flex-item">
            <TropyIcon />
            <h5>{schoolTopper}</h5>
          </div>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  const ref = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="success-stories-wrapper">
      <div className="mx pad">
        <div className="success-stories-container">
          <h4>
            <span>SUCCESS STORIES</span>
          </h4>
          <h2>We swear we didn’t force them to</h2>
        </div>
        <div className="slider-container">
          <div
            className="arrow"
            style={{ cursor: "pointer" }}
            onClick={() => ref.current?.slickPrev()}
          >
            <ChevronLeft />
          </div>
          <div>
            <div className="slick-slider-wrapper">
              <Slider ref={ref} {...settings}>
                {SuccessStoriesData.map((story, index) => (
                  <div key={index}>
                    <SuccessStory
                      image={story.image}
                      name={story.name}
                      class={story.class}
                      description={story.description}
                      schoolTopper={story.schoolTopper}
                      year={story.year}
                    />
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
    </div>
  );
};

export default SuccessStories;
