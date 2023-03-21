import { SerializedStyles } from "@emotion/react";
import { ContentType } from "chai-ui-v2";
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

export interface ComponentsContextMenuProps {
  isComponentsContextMenuOpen: boolean;
  addComponent: (ContentType: ContentType) => void;
  toggleContextMenu: (e: React.MouseEvent) => void;
  customCSS?: SerializedStyles;
}

const ComponentsContextMenuComponent = ({
  isComponentsContextMenuOpen,
  addComponent,
  toggleContextMenu,
  customCSS,
}: ComponentsContextMenuProps) => {
  const handleClickComponent = (
    e: React.MouseEvent,
    contentType: ContentType,
  ) => {
    addComponent(contentType);
    toggleContextMenu(e);
  };

  return (
    <CreateTemplateNavWrap
      className={`${isComponentsContextMenuOpen ? "active" : ""}`}
      customCSS={customCSS}
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

export default ComponentsContextMenuComponent;
