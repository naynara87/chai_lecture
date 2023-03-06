import styled from "@emotion/styled";
import React from "react";
import { ComponentButtonRadiFillMain } from "../atoms";
import { ComponentRecordButton } from "../molecules";
import ImgProfileDefaultComponent from "../atoms/ImgProfileDefaultComponent";
import IconLight from "../../assets/images/icon/icon_light_navy.svg";
import ComponentText from "./ComponentText";

const FinishRecordWrapper = styled.div`
`;

const ComponentRecordSubmit = () => {
  return (
    <FinishRecordWrapper className="finish-record-wrapper">
      <div className="gray-line">

        <ul className="conversation-wrapper">
          {/* speech bubble */}
          <li className="conversation-wrap active">
            <div className="img-grp">
              <div className="img-wrap">
                {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
                <div className="img-round">
                  <button className="btn-profile">
                    <ImgProfileDefaultComponent />
                  </button>
                </div>
              </div>
              <p className="name">{"왕리리"}</p>
            </div>
            <div className="txt-wrap">
              <p className="chinese">{"今天刮风，下雪，很冷。"}</p>
              <p className="pinyin">{"Jīntiān guā fēng, xià xuě, hěn lěng."}</p>
              {/* <p className="mean">{"오늘은 바람이 불고, 눈이 내려서 추워."}</p> */}
            </div>
          </li>

          {/* TODO: key설명 - 빈칸상태일 때 클래스 blank 추가 */}
          <li className="conversation-wrap blank">
            <div className="img-grp">
              <div className="img-wrap">
                <div className="img-round">
                  <button className="btn-profile">
                    <ImgProfileDefaultComponent />
                  </button>
                </div>
              </div>
              <p className="name">{"김민호"}</p>
            </div>
            <div className="txt-wrap">
              {/* <p className="chinese">{"今天刮风，下雪，很冷。"}</p> */}
            </div>
          </li>
        </ul>
      </div>
      <ComponentRecordButton />
      <div className="btns-wrap">
        <ComponentButtonRadiFillMain text="녹음 파일 제출" />
      </div>
      {/* TODO: key설명 - 녹음파일 제출후 보이게 되는 컨텐츠(모범답안) */}
      <div className="answer-sheet-wrapper">
        <div className="answer-sheet-title"><img src={IconLight} alt="" />모범 답안</div>
        <div className="answer-sheet-conts">
          <ComponentText />
        </div>
      </div>
    </FinishRecordWrapper>
  );
};

export default ComponentRecordSubmit;
