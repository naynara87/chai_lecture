import { useEffect, useState } from "react";
import ComponentsConversationContextMenuCommon from "../components/molecules/ComponentsConversationContextMenuCommon";
import ComponentsContextMenuComponent from "../components/molecules/ComponentsContextMenuComponent";

// FIXME useComponentContext에 합치기
const useComponentConversationContext = () => {
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
    ComponentsConversationContextMenuCommon,
    ComponentsContextMenuComponent,
    isComponentsContextMenuOpen,
    toggleContextMenu,
    closeContextMenu,
  };
};

export default useComponentConversationContext;
