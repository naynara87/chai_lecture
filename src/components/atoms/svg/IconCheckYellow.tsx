import React from "react";
import { colorPalette } from "../../../styles/colorPalette";

interface IconCheckYellowProps {
  color?: string;
}
const IconCheckYellow = ({ color = colorPalette.white }: IconCheckYellowProps) => {
  return (
    <svg width="15" height="10" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.19 0.78C20.17 -0.26 18.22 -0.26 17.2 0.78L8.95 9.16L4.8 4.94C3.74 3.86 1.87 3.86 0.81 4.94C-0.27 6.04 -0.27 7.83 0.81 8.92L6.95 15.16C7.48 15.7 8.19 16 8.95 16C9.71 16 10.42 15.7 10.95 15.16L21.19 4.76C22.27 3.66 22.27 1.88 21.19 0.78Z"
        fill={color}
      />
    </svg>
  );
};

export default IconCheckYellow;
