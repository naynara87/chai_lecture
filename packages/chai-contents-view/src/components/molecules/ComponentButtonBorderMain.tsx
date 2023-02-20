import React from "react";

interface ComponentButtonBorderMain {
  text: String,
}

const ComponentButtonBorderMain = ({text}: ComponentButtonBorderMain) => {

  return (
      <button className="btn btn-border-main" data-text={text}><span>{text}</span></button>
  );
};

export default ComponentButtonBorderMain;
