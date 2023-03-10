import { useState } from "react";
import ComponentsContextMenuCommon from "../components/molecules/ComponentsContextMenuCommon";

const useComponentContext = () => {
  const [isComponentsContextMenuOpen, setIsComponentsContextMenuOpen] =
    useState(false);

  const toggleContextMenu = () => {
    setIsComponentsContextMenuOpen(!isComponentsContextMenuOpen);
  };

  const closeContextMenu = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsComponentsContextMenuOpen(false);
    }
  };

  return {
    ComponentsContextMenuCommon,
    isComponentsContextMenuOpen,
    toggleContextMenu,
    closeContextMenu,
  };
};

export default useComponentContext;
