import { useState } from "react";
import ComponentsContextMenu from "../components/molecules/ComponentsContextMenu";

const useComponentContext = () => {
  const [isComponentsContextMenuOpen, setIsComponentsContextMenuOpen] =
    useState(true);

  const toggleContextMenu = () => {
    setIsComponentsContextMenuOpen(!isComponentsContextMenuOpen);
  };

  return {
    ComponentsContextMenu,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  };
};

export default useComponentContext;
