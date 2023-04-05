import React from "react";

interface IconHamburgerMenuProps {
  onClick?: () => void;
}
const IconHamburgerMenu = ({ onClick }: IconHamburgerMenuProps) => {
  return (
    <svg
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 8H12.5"
        stroke="#565656"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M3.5 11.3418H12.5"
        stroke="#565656"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M3.5 4.65625H12.5"
        stroke="#565656"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconHamburgerMenu;
