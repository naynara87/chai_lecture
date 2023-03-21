import { ContentType, ID } from "chai-ui-v2";
import React from "react";
import {
  contentComponents,
  contentComponentsGroupMap,
  contentComponentsNameMap,
  ContentsGroup,
} from "../../data/appData";
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

const ComponentsContextMenuCommon = ({
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
      {Object.entries(contentComponents).map(
        ([contentsGroup, contentTypes]) => {
          if (contentTypes.length === 0) return null;
          return (
            <CreateTemplateNav key={contentsGroup}>
              <p className="nav-tit">
                {contentComponentsGroupMap[contentsGroup as ContentsGroup]}
              </p>
              <NavList>
                {contentTypes.map((contentType) => {
                  return (
                    <li
                      className="nav-li"
                      key={contentType}
                      onClick={(e) => handleClickComponent(e, contentType)}
                    >
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">
                        {contentComponentsNameMap[contentType] || contentType}
                      </p>
                    </li>
                  );
                })}
              </NavList>
            </CreateTemplateNav>
          );
        },
      )}
    </CreateTemplateNavWrap>
  );
};

export default ComponentsContextMenuCommon;
