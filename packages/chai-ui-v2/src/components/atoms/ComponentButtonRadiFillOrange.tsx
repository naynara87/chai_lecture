import React from "react";

interface ComponentButtonRadiFillMainProps {
  text: string;
  onClickBtn?: () => void;
}

const ComponentButtonRadiFillOrange = ({
  text,
  onClickBtn,
}: ComponentButtonRadiFillMainProps) => {
  return (
    <button className="btn btn-radi-fill-orange" onClick={onClickBtn}>
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonRadiFillOrange;
