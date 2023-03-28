import { ContentType, ID } from "chai-ui-v2";
import React from "react";

import {
  CreateTemplateNav,
  CreateTemplateNavWrap,
  NavList,
} from "../../styles/template";
import { AddComponentMap } from "../../types/page";

export interface ComponentsContextMenuProps {
  isComponentsContextMenuOpen: boolean;
  slideId: ID;
  position: "contents" | "leftContents" | "rightContents";
  addComponentMap: AddComponentMap;
  toggleContextMenu: (e: React.MouseEvent) => void;
}

// FIXME ComponentsContextMenuCommon에 합치기
const ComponentsConversationContextMenuCommon = ({
  isComponentsContextMenuOpen,
  addComponentMap,
  slideId,
  position,
  toggleContextMenu,
}: ComponentsContextMenuProps) => {
  const { addComponentToCommonTemplate } = addComponentMap;
  const handleClickComponent = (
    e: React.MouseEvent,
    contentType: ContentType,
  ) => {
    addComponentToCommonTemplate(slideId, contentType, position);
    toggleContextMenu(e);
  };
  return (
    <CreateTemplateNavWrap
      className={`${isComponentsContextMenuOpen ? "active" : ""}`}
    >
      <CreateTemplateNav>
        <p className="nav-tit">기본형</p>
        <NavList>
          <li
            className="nav-li"
            onClick={(e) => handleClickComponent(e, "iconText")}
          >
            <div className="thumb-comp">50*50</div>
            <p className="txt-comp">지시문</p>
          </li>
        </NavList>
      </CreateTemplateNav>
      <CreateTemplateNav>
        <p className="nav-tit">혼합형</p>
        <NavList>
          <li
            className="nav-li"
            onClick={(e) => handleClickComponent(e, "conversation")}
          >
            <div className="thumb-comp">50*50</div>
            <p className="txt-comp">대화</p>
          </li>
        </NavList>
      </CreateTemplateNav>
    </CreateTemplateNavWrap>
  );
};

export default ComponentsConversationContextMenuCommon;
