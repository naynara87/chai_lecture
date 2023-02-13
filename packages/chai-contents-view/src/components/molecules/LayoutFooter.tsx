import React from "react";
import iconOpen from "../../images/icon/ic_arrow_up_gray.svg";
import iconClose from "../../images/icon/ic_arrow_down_gray.svg";
import iconLeft from "../../images/icon/ic_arrow_left_white.svg";
import iconRight from "../../images/icon/ic_arrow_right_white.svg";
import imgHdCharacter from "../../images/img/cha_wini_wink.png";

const LayoutFooter = () => {
  return (
    <footer className="cai-ft">
      {/* position: absolute */}
      <div className="lnb-wrap">
        {/* TODO: 클릭시 cai-nav-container가 active */}
        <button className="btn-text">
          학습순서
          <img src={iconOpen} alt="" className="icon icon-open" />
          <img src={iconClose} alt="" className="icon icon-close" />
        </button>
        <div className="cai-nav-container active">
          <img src={imgHdCharacter} alt="위니" />
          <nav className="cai-lnb-wrap">
            <ul className="cai-lnb-list-wrap">
              <li className="cai-lnb-list active">
                복습
                <div className="cai-lnb-sub-wrap">
                  <a href="" className="cai-lnb-sub-link active">회화</a>
                  <a href="" className="cai-lnb-sub-link">문법퀴즈</a>
                  <a href="" className="cai-lnb-sub-link">지난레슨단어</a>
                </div>
              </li>
              <li className="cai-lnb-list">
                코너명
                <div className="cai-lnb-sub-wrap">
                  <a href="" className="cai-lnb-sub-link">헤더</a>
                  <a href="" className="cai-lnb-sub-link">헤더</a>
                  <a href="" className="cai-lnb-sub-link">헤더</a>
                </div>
              </li>
            </ul>
            <button className="txt-btn">학습 중단</button>
          </nav>
        </div>
      </div>
      <div className="ft-conts-wrap">
        <button className="ft-icon-btn" disabled><img src={iconLeft} alt="이전" /></button>
        <span className="txt"><b>{ '1' }</b><small> / { '10' }</small></span>
        <button className="ft-icon-btn"><img src={iconRight} alt="다음" /></button>
      </div>
    </footer>
  );
};

export default LayoutFooter;
