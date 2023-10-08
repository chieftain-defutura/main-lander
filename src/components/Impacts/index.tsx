import React from "react";
import "./Impacts.scss";
import { ImpactsData } from "../../utils/data/ImpactData";

const Impacts: React.FC = () => {
  return (
    <div className="impacts-wrapper">
      <div className="mx pad">
        <div className="impacts-container">
          <div className="container-one">
            <span>impacts</span>
            <h2>Setting sights for your future.</h2>
            <p>
              Our aim is to provide “the answer” for your Why’s. The answers
              made many of the youth transform into an excellency. We are on a
              journey of assisting  youth to explore their core and step into
              the world of endless possibilities.
            </p>
          </div>
          <div className="container-two">
            {ImpactsData.map((f, i) => (
              <div key={i} className="container-two-content">
                <h1>{f.total}</h1>
                <h3>{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impacts;
