import styled from "@emotion/styled";
import React from "react";
import ImgCharacter from "../../images/img/cha_didi_glasses.png";
import ImgKkyngi from "../../images/img/cha_kkungi_positive.png";
import IconSpeaker from "../../images/icon/icon_speaker_white.svg";
import ImgProfileDefault from "../../images/img/img_profile_default.png";
import ImgTemp01 from "../../images/img/temp_profile01.png";
import ComponentVocaNote from "../molecules/ComponentVocaNote";
import LayoutModal from "../molecules/LayoutModal";
import LayoutModalVoca from "../molecules/LayoutModalVoca";
import ComponentButtonBorderMain from "../molecules/ComponentButtonBorderMain";
import ComponentButtonFillBlack from "../molecules/ComponentButtonFillBlack";
import ComponentTitle from "../molecules/ComponentTitle";

const DialogueContainer = styled.div`
  .conversation-wrap {
    align-items: center;
  }

  .blank-gray {
    width: 100%;
  }
`;

const QuizContainer = styled.form`
  .hori-answer-wrap .inp-grp {
    flex-basis: 100%;
  }
`;

const TemplateQuizDialogueSentenceBlank = () => {

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel conversation-panel-wrap">
        <ComponentTitle text="자연스러운 단문이 되도록 문장을 배열해 보세요." />
        {/* 230217 회화영역 */}
        <ul className="conversation-wrapper">
          {/* speech bubble */}
          {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
          <li className="conversation-wrap active">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgProfileDefault} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="chinese">{'今天刮风，下雪，很冷。'}</p>
            </div>
          </li>
          {/* end speech bubble */}
          <li className="conversation-wrap">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgTemp01} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="blank-gray">&nbsp;</p>
            </div>
          </li>
          <li className="conversation-wrap">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgProfileDefault} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="blank-gray">&nbsp;</p>
            </div>
          </li>
          <li className="conversation-wrap">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgTemp01} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="chinese">{'我觉得这里的冬天没有中国那么冷。'}</p>
            </div>
          </li>
          <li className="conversation-wrap">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgProfileDefault} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="blank-gray">&nbsp;</p>
            </div>
          </li>
          <li className="conversation-wrap">
            <div className="img-wrap">
              {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
              <div className="img-round">
                <button className="btn-profile"><img src={ImgTemp01} alt="" className="profile" /></button>
              </div>
            </div>
            <div className="txt-wrap">
              <p className="chinese">{'我觉得这里的冬天没有中国那么冷。'}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-answer-wrap hori-answer-wrap">
            <div className="inp-grp">
              <input type="checkbox" name="answer1" id="answer1" className="inp-chck-gray none" />
              <label htmlFor="answer1" className="label-chck-gray"><span className="text">{ "你最后一次在哪儿用过？" }</span></label>
            </div>
            <div className="inp-grp">
              <input type="checkbox" name="answer2" id="answer2" className="inp-chck-gray none" />
              <label htmlFor="answer2" className="label-chck-gray"><span className="text">{ "真的？你找找包里。" }</span></label>
            </div>
            <div className="inp-grp">
              <input type="checkbox" name="answer3" id="answer3" className="inp-chck-gray none" />
              <label htmlFor="answer3" className="label-chck-gray"><span className="text">{ "从那儿出来以后，我就再也没用过。" }</span></label>
            </div>
          </div>
        </QuizContainer>
        <div className="btns-wrap">
          <ComponentButtonBorderMain text="다시하기" />
          <ComponentButtonFillBlack text="제출하기" />
        </div>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </DialogueContainer>
  );
};

export default TemplateQuizDialogueSentenceBlank;
