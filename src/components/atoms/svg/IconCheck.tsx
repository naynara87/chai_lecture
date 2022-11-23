import React from "react";
import { colorPalette } from "../../../styles/colorPalette";
interface IconCheckProps {
  color?: string;
}

const IconCheck = ({ color = colorPalette.white }: IconCheckProps) => {
  return (
    <svg viewBox="-8 0 35 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.4244 1.08089C18.0643 0.710324 17.5492 0.5 17.014 0.5C16.4789 0.5 15.9637 0.710324 15.6036 1.08089L8.24658 8.61248L4.39551 4.66641C4.02041 4.28082 3.52027 4.07049 2.98512 4.07049C2.44997 4.07049 1.94983 4.28082 1.57473 4.66641C0.804517 5.45262 0.804517 6.73459 1.57473 7.5208L6.83619 12.9091C7.2113 13.2947 7.71144 13.505 8.24658 13.505C8.78173 13.505 9.28187 13.2947 9.65698 12.9091L18.4244 3.93529C19.1946 3.14908 19.1946 1.8671 18.4244 1.08089Z"
        fill={color}
      />
    </svg>
  );
};

export default IconCheck;
