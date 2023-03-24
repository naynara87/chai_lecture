import { useEffect, useState } from "react";
import ComponentsWordCardContextMenuCommon from "../components/molecules/ComponentsWordCardContextMenuCommon";
import ComponentsContextMenuComponent from "../components/molecules/ComponentsContextMenuComponent";

const useComponentWordCardContext = () => {
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
    ComponentsWordCardContextMenuCommon,
    ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
    closeContextMenu,
  };
};

export default useComponentWordCardContext;
