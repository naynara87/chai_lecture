import { useState, useEffect } from "react";

interface useContextMenuProps {
  isRightClick?: boolean;
}

const useContextMenu = ({ isRightClick }: useContextMenuProps) => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => setClicked(false);
    if (isRightClick) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      if (isRightClick) {
        document.removeEventListener("click", handleClick);
      }
    };
  }, [isRightClick]);
  return {
    clicked,
    setClicked,
    points,
    setPoints,
  };
};
export default useContextMenu;
