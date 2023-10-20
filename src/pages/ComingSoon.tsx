import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div
      style={{
        background: "#0A0A0A",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p style={{ fontSize: "42px", color: "#fff" }}>ComingSoon</p>
      </div>
    </div>
  );
};

export default ComingSoon;
