import React from "react";
import styled from "@emotion/styled";
import AudioRecorder from "./AudioRecorder";
import { ImgProfileDefaultComponent, ImgTemp01Component } from "../atoms";
import { colorPalette } from "../../styles";
import ComponentButtonRadiFillOrange from "../atoms/ComponentButtonRadiFillOrange";

const DialogueWrapper = styled.ul`
  .right-conts .bubble-wrap {
    background-color: ${colorPalette.gray300};
  }
`;

const BubbleWrap = styled.div`
  background-color: ${colorPalette.orange200};
`;

const ComponentRoleplay = () => {
  return (
    <div className="roleplay-container">
      <DialogueWrapper className="conversation-wrapper">
        {/* speech bubble */}
        {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
        {/* TODO: key설명 - 오른쪽에서 보일 때 클래스 right-conts 가 추가됨 */}
        <li className="conversation-wrap choice">
          {/* TODO: key설명 - 내가 선택한 역할은 클래스 choice */}
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
          <div className="txt-wrapper">
            <div className="txt-wrap">
              <BubbleWrap className="bubble-wrap">
                <p className="chinese">{"今天刮风，下雪，很冷。"}</p>
                {/* TODO: key설명 - 누르면 pinyin에서 none이 사라지고, 버튼이 안보임 */}
                <ComponentButtonRadiFillOrange text="HINT" />
                <p className="pinyin none">{"Jīntiān guā fēng, xià xuě, hěn lěng."}</p>
                <p className="mean">{"오늘은 바람이 불고, 눈이 내려서 추워."}</p>
              </BubbleWrap>
            </div>
            <AudioRecorder />
          </div>
        </li>
        {/* end speech bubble */}
        {/* TODO: key설명 - 내가 선택하지 않은 역할 */}
        <li className="conversation-wrap right-conts">
          <div className="img-grp">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile">
                  <ImgTemp01Component />
                </button>
              </div>
            </div>
            <div className="name">{"김민호"}</div>
          </div>
          <div className="txt-wrapper">
            <div className="txt-wrap">
              <BubbleWrap className="bubble-wrap">
                <div className="chinese">
                  {"我觉得这里的冬天没有中国那么冷。"}
                </div>
                <div className="pinyin">
                  {"Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng."}
                </div>
                <div className="mean">
                  {"나는 여기 겨울이 중국만큼 춥지 않은 것 같아."}
                </div>
              </BubbleWrap>
            </div>
          </div>
        </li>
      </DialogueWrapper>
    </div >
  );
};

export default ComponentRoleplay;
