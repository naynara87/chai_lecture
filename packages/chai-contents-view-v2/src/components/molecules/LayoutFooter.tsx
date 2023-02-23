import React from "react";
import {
  ComponentButtonFillBlack,
  IconCloseComponent,
  IconOpenComponent,
  IconLeftArrowComponent,
  IconRightArrowComponent,
  ImgCharacterComponent,
} from "chai-ui-v2";

const LayoutFooter = () => {
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
          <button className="ft-icon-btn" disabled>
            <IconLeftArrowComponent />
          </button>
          <span className="txt">
            <b>{"1"}</b>
            <small> / {"10"}</small>
          </span>
          <button className="ft-icon-btn">
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
            {/* TODO: key설명 - 반복영역. 열려있을 때 active 추가됨 */}
            <li className="cai-nav-list active">
              <div className="cai-nav-ttl">{"복습"}</div>
              <div className="cai-nav-sub-wrap">
                {/* TODO: key설명 - 현재 페이지에 active */}
                <a href="" className="cai-nav-sub-link active">
                  {"회화"}
                </a>
                <a href="" className="cai-nav-sub-link">
                  {"문법퀴즈"}
                </a>
                <a href="" className="cai-nav-sub-link">
                  {"지난레슨단어"}
                </a>
              </div>
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
