import React from "react";
import {
  ComponentButtonFillBlack,
  IconCloseComponent,
  IconOpenComponent,
  IconLeftArrowComponent,
  IconRightArrowComponent,
  ImgCharacterComponent,
  Page,
} from "chai-ui-v2";

interface LayoutFooterProps {
  pages: Page[];
  currentPageIndex: number;
  handleClickNext: () => void;
  handleClickPrev: () => void;
}

const LayoutFooter = ({
  pages,
  currentPageIndex,
  handleClickNext,
  handleClickPrev,
}: LayoutFooterProps) => {
  return (
    <div>
      <footer className="cai-ft">
        {/* position: absolute */}
        {/* TODO: key설명 - 클릭시 스스로와 cai-nav-container에 active 추가 */}
        <button className="btn-ft-text">
          코너
          <IconOpenComponent />
          <IconCloseComponent />
        </button>
        <div className="ft-conts-wrap">
          <button
            className="ft-icon-btn"
            onClick={handleClickPrev}
            disabled={currentPageIndex === 0}
          >
            <IconLeftArrowComponent />
          </button>
          <span className="txt">
            <b>{currentPageIndex + 1}</b>
            <small> / {pages.length}</small>
          </span>
          <button className="ft-icon-btn" onClick={handleClickNext}>
            <IconRightArrowComponent />
          </button>
        </div>
      </footer>

      <div className="cai-nav-container">
        <ImgCharacterComponent
          characterType="winiWink"
          characterAlt="위니윙크"
        />
        <nav className="cai-nav-wrap">
          <ul className="cai-nav-list-wrap">
            {/* TODO: key설명 - 반복영역 클릭시 해당 코너의 시작 페이지로 이동 */}
            <li className="cai-nav-list active">
              <a href="" className="cai-nav-link">{"복습"}</a>
            </li>
            <li className="cai-nav-list">
              <a href="" className="cai-nav-link">{"학습 들어가기"}</a>
            </li>
            <li className="cai-nav-list">
              <a href="" className="cai-nav-link">{"패턴 중국어"}</a>
            </li>
            <li className="cai-nav-list">
              <a href="" className="cai-nav-link">{"회화"}</a>
            </li>
            <li className="cai-nav-list">
              <a href="" className="cai-nav-link">{"문법"}</a>
            </li>
            <li className="cai-nav-list">
              <a href="" className="cai-nav-link">{"문화"}</a>
            </li>
          </ul>
          <div className="btn-wrap">
            <ComponentButtonFillBlack text={"나가기"} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LayoutFooter;
