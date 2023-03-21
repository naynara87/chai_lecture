import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef } from "react";
import { PageIntroduction, useGlobalAudio } from "../../core";
import { colorPalette } from "../../assets";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import ModalCommon from "./ModalCommon";
import CharacterProfile from "../../assets/images/img/cha_profile01.png";
import { v4 as uuidV4 } from "uuid";

// const RightColor = "#30C17B";
// const WrongColor = "#EE8407";
// const TextColor = "#222222";

const ModalBaseTitle = styled.div`
  .ttl {
    /* NOTE: 오답일땐 오답 컬러, 정답일 땐 정답 컬러 */
    color: ${colorPalette.black};
  }
`;

const ModalBaseContents = styled.div`
  /* NOTE: dec 의 height 가 36.3333333333vh(436px을 vh로 변경)이상일 때 추가됨 */
  align-items: flex-start;
`;

interface LayoutModalIntroductionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  introduction: PageIntroduction;
}

const LayoutModalIntroduction = ({
  isModalOpen,
  setIsModalOpen,
  introduction,
}: LayoutModalIntroductionProps) => {
  const modalUuidRef = useRef(uuidV4());

  const {
    globalAudioRef,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();
  const audioEnded = useCallback(() => {
    if (
      globalAudioId
        .toString()
        .includes(`introductionModal_${modalUuidRef.current}`)
    ) {
      handleAudioReset();
    }
  }, [handleAudioReset, globalAudioId, modalUuidRef]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", audioEnded);
    }
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  useEffect(() => {
    handleClickAudioButton(
      "introductionModal",
      modalUuidRef.current,
      0,
      introduction?.soundEffect?.src ?? "",
    );
    // FIXME kjw handleClickAudioButton을 디펜던시에 넣으면 콜스택맥스 에러가 뜹니다... 이따가 수정할게요.. throttle을 써도 안됩니다..
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introduction]);

  const handleClose = () => {
    setIsModalOpen(false);
    handleAudioReset();
  };

  return (
    // NOTE: 설명 - active가 되면 보임
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      {/* 제목영역 */}
      <ModalBaseTitle className="base-ttl">
        <div className="profile-img-wrap">
          <img src={CharacterProfile} alt="프로필" />
        </div>
        <div className="txt-wrap">
          {/* 간지 */}
          <h2 className="ttl">{introduction.title}</h2>
          <p className="txt">{introduction.subTitle}</p>
        </div>
      </ModalBaseTitle>
      {/* 내용영역 */}
      <ModalBaseContents className="base-conts">
        <div className="dec">{introduction.contents}</div>
      </ModalBaseContents>

      {/* NOTE: 설명 - 버튼이 하나만 들어갈 수도 있음 */}
      <div className="btns-wrap">
        <ComponentButtonRadiFillMain text="확인" onClickBtn={handleClose} />
      </div>
    </ModalCommon>
  );
};

export default LayoutModalIntroduction;
