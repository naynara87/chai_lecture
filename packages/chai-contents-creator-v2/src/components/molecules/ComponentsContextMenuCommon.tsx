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
  toggleContextMenu: () => void;
}

const ComponentsContextMenuCommon = ({
  isComponentsContextMenuOpen,
  addComponentMap,
  slideId,
  position,
  toggleContextMenu,
}: ComponentsContextMenuProps) => {
  const { addComponentToCommonTemplate } = addComponentMap;
  const handleClickComponent = (contentType: ContentType) => {
    addComponentToCommonTemplate(slideId, contentType, position);
    toggleContextMenu();
  };
  return (
    <CreateTemplateNavWrap
      className={`${isComponentsContextMenuOpen ? "active" : ""}`}
    >
      {Object.entries(contentComponents).map(
        ([contentsGroup, contentTypes]) => {
          return (
            <CreateTemplateNav key={contentsGroup}>
              <p className="nav-tit">
                {contentComponentsGroupMap[contentsGroup as ContentsGroup]}
              </p>
              <NavList>
                {contentTypes.map((contentType) => {
                  return (
                    // TODO : onClick -> 현재 템플릿 데이터에 컴포넌트 추가
                    <li
                      className="nav-li"
                      key={contentType}
                      onClick={() => handleClickComponent(contentType)}
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
