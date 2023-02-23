import React from "react";

interface ComponentButtonBorderMainProps {
  text: string;
}

const ComponentButtonBorderMain = ({
  text,
}: ComponentButtonBorderMainProps) => {
  return (
    <button className="btn btn-border-main" data-text={text}>
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonBorderMain;
