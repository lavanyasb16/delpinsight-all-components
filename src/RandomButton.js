  
import React from "react";

const RandomButton = props => {
  const { width, height, color, text } = props;
  return (
    <button
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text}
    </button>
  );
};

export default RandomButton;