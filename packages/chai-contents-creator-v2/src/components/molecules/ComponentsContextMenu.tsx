import React from "react";
import {
  CreateTemplateNav,
  CreateTemplateNavWrap,
  NavList,
} from "../../styles/template";

export interface ComponentsContextMenuProps {
  isComponentsContextMenuOpen: boolean;
}

const ComponentsContextMenu = ({
  isComponentsContextMenuOpen,
}: ComponentsContextMenuProps) => {
  return (
    <CreateTemplateNavWrap
      className={`${isComponentsContextMenuOpen ? "active" : ""}`}
    >
      <CreateTemplateNav>
        <p className="nav-tit">기본형</p>
        {/* TODO: lsh 버튼 클릭시 선택한 컴포넌트 추가 */}
        <NavList>
          <li className="nav-li">
            <div className="thumb-comp">50*50</div>
            <p className="txt-comp">텍스트</p>
          </li>
          <li className="nav-li">
            <div className="thumb-comp">50*50</div>
            <p className="txt-comp">텍스트</p>
          </li>
        </NavList>
      </CreateTemplateNav>
      <CreateTemplateNav>
        <p className="nav-tit">기본형</p>
        <NavList>
          <li className="nav-li">
            <div className="thumb-comp">50*50</div>
            <p className="txt-comp">텍스트</p>
          </li>
          <li className="nav-li">
            <div className="thumb-comp">50*50</div>
            <p className="txt-comp">텍스트</p>
          </li>
        </NavList>
      </CreateTemplateNav>
    </CreateTemplateNavWrap>
  );
};

export default ComponentsContextMenu;
