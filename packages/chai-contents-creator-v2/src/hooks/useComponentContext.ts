import { useState } from "react";
import ComponentsContextMenuCommon from "../components/molecules/ComponentsContextMenuCommon";

const useComponentContext = () => {
  const [isComponentsContextMenuOpen, setIsComponentsContextMenuOpen] =
    useState(false);

  const toggleContextMenu = () => {
    setIsComponentsContextMenuOpen(!isComponentsContextMenuOpen);
  };

  return {
    ComponentsContextMenuCommon,
    isComponentsContextMenuOpen,
    toggleContextMenu,
  };
};

export default useComponentContext;
