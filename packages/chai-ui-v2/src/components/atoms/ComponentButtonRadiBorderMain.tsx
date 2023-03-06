import React from "react";

interface ComponentButtonRadiBorderMainProps {
  text: string;
}

const ComponentButtonRadiBorderMain = ({
  text,
}: ComponentButtonRadiBorderMainProps) => {
  return (
    <button className="btn btn-radi-border-main">
      <span>{text}</span>
    </button>
  );
};

export default ComponentButtonRadiBorderMain;
