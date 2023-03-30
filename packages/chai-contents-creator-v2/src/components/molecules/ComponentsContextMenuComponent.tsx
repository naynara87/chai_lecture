import { SerializedStyles } from "@emotion/react";
import { ContentType } from "chai-ui-v2";
import React from "react";
import {
  ContentComponents,
  contentComponentsGroupMap,
  contentComponentsNameMap,
  ContentsGroup,
} from "../../data/appData";
import { contentComponentsThumbMap } from "../../data/thumbnailData";
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
  contentComponents: ContentComponents | Omit<ContentComponents, "character">;
}

const ComponentsContextMenuComponent = ({
  isComponentsContextMenuOpen,
  addComponent,
  toggleContextMenu,
  customCSS,
  contentComponents,
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
                      <img
                        className="thumb-comp"
                        src={
                          contentComponentsThumbMap[contentType] || contentType
                        }
                        alt=""
                      />
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
