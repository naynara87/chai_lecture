import React from "react";

interface ComponentButtonRadiFillMainProps {
  text: String;
}

const ComponentButtonRadiFillMain = ({
  text,
}: ComponentButtonRadiFillMainProps) => {
  return (
    <button className="btn btn-radi-fill-main" data-text={text}>
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonRadiFillMain;
