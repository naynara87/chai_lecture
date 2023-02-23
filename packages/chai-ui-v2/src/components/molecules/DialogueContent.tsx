import React from "react";
import { ImgProfileDefaultComponent } from "../atoms";
import QuizDialogueWordBlankSelectBoxes from "./QuizDialogueWordBlankSelectBoxes";

const DialogueContent = () => {
  {
    /* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */
  }
  {
    /* TODO: key설명 - 정답일 경우 answer-right 클래스가 추가되고, input은 disabled */
  }
  {
    /* TODO: key설명 - 오답일 경우 answer-wrong 클래스가 추가되고, input은 disabled */
  }
  return (
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
        {/* TODO: key설명 - 등록된 캐릭터의 이름을 가져옴. 디폴트 이미지일때는 이름이 없음 (피그마 참고: 2-복습-9) */}
        <p className="name">{"왕리리"}</p>
      </div>
      <div className="txt-wrap">
        {/* <p className="chinese">{'今天刮风，下雪，很冷。'}</p> */}
        <p className="chinese">
          {"今天刮风，"}
          <p className="blank-gray">&nbsp;</p>
          {"，很冷。"}
        </p>
        <p className="pinyin">{"Jīntiān guā fēng, xià xuě, hěn lěng."}</p>
        <p className="mean">{"오늘은 바람이 불고, 눈이 내려서 추워."}</p>
        <QuizDialogueWordBlankSelectBoxes />
      </div>
    </li>
  );
};

export default DialogueContent;
