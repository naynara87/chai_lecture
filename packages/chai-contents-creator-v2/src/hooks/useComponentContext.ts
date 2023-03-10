import { useEffect, useState } from "react";
import ComponentsContextMenuCommon from "../components/molecules/ComponentsContextMenuCommon";

const useComponentContext = () => {
  const [isComponentsContextMenuOpen, setIsComponentsContextMenuOpen] =
    useState(false);

  const toggleContextMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsComponentsContextMenuOpen(!isComponentsContextMenuOpen);
  };

  const closeContextMenu = () => {
    setIsComponentsContextMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeContextMenu);
    return () => {
      window.removeEventListener("click", closeContextMenu);
    };
  });

  return {
    ComponentsContextMenuCommon,
    isComponentsContextMenuOpen,
    toggleContextMenu,
    closeContextMenu,
  };
};

export default useComponentContext;
