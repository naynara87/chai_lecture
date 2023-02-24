import React from "react";

interface ComponentButtonRadiFillMainProps {
  text: string;
}

const ComponentButtonRadiFillOrange = ({
  text,
}: ComponentButtonRadiFillMainProps) => {
  return (
    <button className="btn btn-radi-fill-orange" data-text={text}>
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonRadiFillOrange;
