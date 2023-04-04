import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import React, { useEffect, useRef } from "react";

const HamburgMenuContainer = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(105%, 0);
  cursor: auto;
  background-color: ${colorPalette.white};
  border-radius: 8px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.15);
  padding: 8px;
  z-index: 20;
`;

const HamburgMenuItem = styled.li`
  padding: 4px;
  cursor: pointer;
  font-size: 12px;
  line-height: 17px;
  color: ${colorPalette.gray900};
  font-weight: 500;
  :hover {
    opacity: 0.8;
  }
`;

interface HamburgMenuProps {
  onClickDelete: () => void;
  onClickCopy: () => void;
  onClickPaste: () => void;
  closeHamburgerMenu: () => void;
}
const HamburgMenu = ({
  onClickDelete,
  onClickCopy,
  onClickPaste,
  closeHamburgerMenu,
}: HamburgMenuProps) => {
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeHamburgerMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, closeHamburgerMenu]);
  return (
    <HamburgMenuContainer className="hamburg-menu" ref={menuRef}>
      <HamburgMenuItem onClick={onClickDelete}>삭제</HamburgMenuItem>
      <HamburgMenuItem onClick={onClickCopy}>복사</HamburgMenuItem>
      <HamburgMenuItem onClick={onClickPaste}>붙여넣기</HamburgMenuItem>
    </HamburgMenuContainer>
  );
};

export default HamburgMenu;
