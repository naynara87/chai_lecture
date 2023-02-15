import React from "react";
import iconOpen from "../../images/icon/ic_arrow_up_gray.svg";
import iconClose from "../../images/icon/ic_arrow_down_gray.svg";
import iconLeft from "../../images/icon/ic_arrow_left_white.svg";
import iconRight from "../../images/icon/ic_arrow_right_white.svg";
import imgHdCharacter from "../../images/img/cha_wini_wink.png";

const LayoutFooter = () => {
  return (
    <div>
      <footer className="cai-ft">
        {/* position: absolute */}
        {/* TODO: 클릭시 스스로와 cai-nav-container에 active 추가 */}
        <button className="btn-ft-text">
          학습순서
          <img src={iconOpen} alt="" className="icon icon-open" />
          <img src={iconClose} alt="" className="icon icon-close" />
        </button>
        <div className="ft-conts-wrap">
          <button className="ft-icon-btn" disabled><img src={iconLeft} alt="이전" /></button>
          <span className="txt"><b>{'1'}</b><small> / {'10'}</small></span>
          <button className="ft-icon-btn"><img src={iconRight} alt="다음" /></button>
        </div>
      </footer>

      <div className="cai-nav-container">
        <img src={imgHdCharacter} alt="위니" className="character" />
        <nav className="cai-nav-wrap">
          <ul className="cai-nav-list-wrap">
            {/* TODO: 반복영역. 열려있을 때 active 추가됨 */}
            <li className="cai-nav-list active">
              <div className="cai-nav-ttl">{'복습'}</div>
              <div className="cai-nav-sub-wrap">
                {/* TODO: 현재 페이지에 active */}
                <a href="" className="cai-nav-sub-link active">{'회화'}</a>
                <a href="" className="cai-nav-sub-link">{'문법퀴즈'}</a>
                <a href="" className="cai-nav-sub-link">{'지난레슨단어'}</a>
              </div>
            </li>
          </ul>
          <div className="btn-wrap">
            {/* data-text 인터렉션용. before의 컨텐츠로 버튼 text와 동일한 정보 들어가야함 */}
            <button className="btn-fill-black" data-text="학습 중단"><span>학습 중단</span></button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LayoutFooter;
