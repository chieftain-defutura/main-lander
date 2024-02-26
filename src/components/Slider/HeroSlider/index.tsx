import React, { useState, useEffect } from "react";
import SlideImgOne from "../../../assets/images/hero-img-1.png";
import SlideImgTwo from "../../../assets/images/hero-img-2.png";
import SlideImgThree from "../../../assets/images/de-group-2.jpg";
import "./HeroSlider.scss";

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Assuming you have 3 slides
    }, 2000); // Auto-loop every second (1000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section id="slider">
      {["s1", "s2", "s3"].map((id, index) => (
        <input
          key={id}
          type="radio"
          name="slider"
          id={id}
          checked={currentSlide === index}
        />
      ))}
      {[SlideImgOne, SlideImgTwo, SlideImgThree].map((imgSrc, index) => (
        <label
          key={`slide${index + 1}`}
          htmlFor={`s${index + 1}`}
          id={`slide${index + 1}`}
        >
          <img
            src={imgSrc}
            alt=""
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </label>
      ))}
    </section>
  );
};

export default HeroSlider;
