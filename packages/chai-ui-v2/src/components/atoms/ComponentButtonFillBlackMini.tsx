import React from "react";

interface ComponentButtonFillBlackProps {
  text: string;
}

const ComponentButtonFillBlackMini = ({ text }: ComponentButtonFillBlackProps) => {
  return (    
    <button className="btn btn-radi-fill-black-mini">{text}</button>
  );
};

export default ComponentButtonFillBlackMini;
