import React from "react";
import styled from "@emotion/styled";
import AudioRecorder from "./AudioRecorder";
import ComponentRecordButton from "./ComponentRecordButton";
import { ImgProfileDefaultComponent, ImgTemp01Component } from "../atoms";

const DialogueWrapper = styled.ul`
  .right-conts .bubble-wrap {
    background-color: #eff1f5;
  }
`;

const BubbleWrap = styled.div`
  background-color: #fff3ea;
`;

const ComponentRoleplay = () => {
  return (
    <div className="roleplay-container">
      <DialogueWrapper className="conversation-wrapper">
        {/* speech bubble */}
        {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
        {/* TODO: key설명 - 오른쪽에서 보일 때 클래스 right-conts 가 추가됨 */}
        <li className="conversation-wrap">
          <div className="img-wrap">
            {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
            <div className="img-round">
              <button className="btn-profile">
                <ImgProfileDefaultComponent />
              </button>
            </div>
          </div>
          <div className="txt-wrap">
            <p className="name">{"왕리리"}</p>
            <BubbleWrap className="bubble-wrap">
              <p className="chinese">{"今天刮风，下雪，很冷。"}</p>
              <p className="pinyin">{"Jīntiān guā fēng, xià xuě, hěn lěng."}</p>
              <p className="mean">{"오늘은 바람이 불고, 눈이 내려서 추워."}</p>
              <AudioRecorder />
              <ComponentRecordButton />
            </BubbleWrap>
          </div>
        </li>
        {/* end speech bubble */}
        <li className="conversation-wrap right-conts">
          <div className="img-wrap">
            {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
            <div className="img-round">
              <button className="btn-profile">
                <ImgTemp01Component />
              </button>
            </div>
          </div>
          <div className="txt-wrap">
            <div className="name">{"김민호"}</div>
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
              {/* <AudioRecorder /> */}
              <ComponentRecordButton />
            </BubbleWrap>
          </div>
        </li>
      </DialogueWrapper>
    </div>
  );
};

export default ComponentRoleplay;
