import { useEffect, useState } from "react";
import ComponentsContextMenuCommon from "../components/molecules/ComponentsContextMenuCommon";
import ComponentsContextMenuComponent from "../components/molecules/ComponentsContextMenuComponent"

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
ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
    closeContextMenu,
  };
};

export default useComponentContext;
