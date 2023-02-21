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

const DialogueContainer = styled.div`
`;

const QuizContainer = styled.form`
`;

const TemplateQuizDialogueChoice = () => {

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel conversation-panel-wrap">
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
              <p className="name">{'왕리리'}</p>
              <p className="chinese">{'今天刮风，下雪，很冷。'}</p>
              <p className="pinyin">{'Jīntiān guā fēng, xià xuě, hěn lěng.'}</p>
              <p className="mean">{'오늘은 바람이 불고, 눈이 내려서 추워.'}</p>
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
              <p className="name">{'김민호'}</p>
              <p className="chinese">{'我觉得这里的冬天没有中国那么冷。'}</p>
              <p className="pinyin">{'Wǒ juédé zhèlǐ de dōngtiān méiyǒu zhòng guó nàme lěng.'}</p>
              <p className="mean">{'나는 여기 겨울이 중국만큼 춥지 않은 것 같아.'}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="layout-panel wide-panel">
        <QuizContainer method="post" className="quiz-container">
          <div className="quiz-question-wrap">
            <p className="text-md">{`麻婆豆腐是哪个省的传统名菜？`}</p>
          </div>
          <div className="quiz-answer-wrap hori-answer-wrap">
            <div className="inp-grp">
              <input type="radio" name="answer" id="answer1" className="inp-chck-gray none" />
              <label htmlFor="answer1" className="label-chck-gray"><span className="text">{ "四川" }</span></label>
            </div>
            <div className="inp-grp">
              <input type="radio" name="answer" id="answer2" className="inp-chck-gray none" />
              <label htmlFor="answer2" className="label-chck-gray"><span className="text">{ "上海" }</span></label>
            </div>
          </div>
        </QuizContainer>
      </div>
      <LayoutModal />
      <LayoutModalVoca />
    </DialogueContainer>
  );
};

export default TemplateQuizDialogueChoice;
