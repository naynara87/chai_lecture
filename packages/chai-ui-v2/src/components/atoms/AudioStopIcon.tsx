import React from "react";
import { colorPalette } from "../../styles";

interface AudioStopIconProps {
  color?: string;
}
const AudioStopIcon = ({
  color = `${colorPalette.red600}`,
}: AudioStopIconProps) => {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="34.0908"
        y="32.0909"
        width="23.2727"
        height="23.2727"
        rx="2"
        fill={`${color}`}
      />
      <defs>
        <filter
          id="filter0_d_1021_62995"
          x="0"
          y="0"
          width="90"
          height="90"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1021_62995"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1021_62995"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AudioStopIcon;
