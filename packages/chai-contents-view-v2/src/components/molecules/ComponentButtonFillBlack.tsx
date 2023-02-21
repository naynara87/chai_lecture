import React from "react";

interface ComponentButtonFillBlack {
  text: String,
}

const ComponentButtonFillBlack = ({text}: ComponentButtonFillBlack) => {

  return (
      <button className="btn btn-fill-black" data-text={text}><span>{text}</span></button>
  );
};

export default ComponentButtonFillBlack;
