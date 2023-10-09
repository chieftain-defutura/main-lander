import React, { useState, useEffect } from "react";
import "./HeroSlider.scss";

const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAuhl3uh042JPGf85NZks15whSUA-ogChPw&usqp=CAU",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAuhl3uh042JPGf85NZks15whSUA-ogChPw&usqp=CAU",
  "data:image/jpeg;base64,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",
];

const HeroSlider = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousClick = () => {
    setCurrentPage((currentPage - 1 + data.length) % data.length);
  };

  const handleNextClick = () => {
    setCurrentPage((currentPage + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentPage((c) => {
          if (c === data.length - 2) return 1;

          return c + 1;
        }),
      4000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(currentPage);
  return (
    <div className="heroslider-container">
      <div className="heroslider-wrapper">
        <div className="image-container prev" onClick={handlePreviousClick}>
          <div className="image"></div>
          <img src={data[currentPage - 1]} alt={`Image ${currentPage - 1}`} />
        </div>
        <div className="image-container current">
          <img src={data[currentPage]} alt={`Image ${currentPage}`} />
        </div>
        <div
          className={`image-container next ${
            currentPage === data.length - 1 ? "no-animation" : ""
          }`}
          onClick={handleNextClick}
        >
          <div className="image"></div>
          <img src={data[currentPage + 1]} alt={`Image ${currentPage + 1}`} />
        </div>
      </div>

      <div className="slick-dots">
        {data.map((f, i) => (
          <div
            style={{
              background: currentPage === i ? "white" : "gray",
              padding: currentPage === i ? "8px" : "4px",
              fontSize: "0px",
              borderRadius: "50%",
              margin: "4px",
              width: "8px",
            }}
            key={i}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
