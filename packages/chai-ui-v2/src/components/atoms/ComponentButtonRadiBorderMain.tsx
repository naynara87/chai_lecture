import React from "react";

interface ComponentButtonRadiBorderMainProps {
  text: string;
  onClickBtn?: () => void;
}

const ComponentButtonRadiBorderMain = ({
  text,
  onClickBtn,
}: ComponentButtonRadiBorderMainProps) => {
  return (
    <button className="btn btn-radi-border-main" onClick={onClickBtn}>
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonRadiBorderMain;
