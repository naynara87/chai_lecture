import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef } from "react";
import { PageIntroduction, useGlobalAudio } from "../../core";
import { colorPalette } from "../../assets";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import CharacterProfile from "../../assets/images/img/cha_profile01.png";
import { v4 as uuidV4 } from "uuid";
import { HtmlContentComponent } from "../atoms";
import ModalBase from "./ModalBase";

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
  justify-content: flex-start;
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
    setTimeout(() => {
      if (introduction?.soundEffect?.src && globalAudioRef?.current) {
        handleClickAudioButton(
          "introductionModal",
          modalUuidRef.current,
          0,
          introduction.soundEffect.src,
        );
      }
    }, 0);

    // FIXME kjw handleClickAudioButton을 디펜던시에 넣으면 콜스택맥스 에러가 뜹니다... 이따가 수정할게요.. throttle을 써도 안됩니다..
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introduction, globalAudioRef?.current]);

  const handleClose = () => {
    setIsModalOpen(false);
    handleAudioReset();
  };

  return (
    // NOTE: 설명 - active가 되면 보임
    <ModalBase open={isModalOpen} onClose={handleClose}>
      <div className="modal active">
        <div className="modal-container base-modal">
          <div className="base-wrapper">
            <ModalBaseTitle className="base-ttl">
              <div className="profile-img-wrap">
                <img
                  src={
                    introduction.character.url
                      ? introduction.character.url
                      : CharacterProfile
                  }
                  alt="프로필"
                />
              </div>
              <div className="txt-wrap">
                <h2 className="ttl">
                  <HtmlContentComponent html={introduction.title} />
                </h2>
                <div className="txt">
                  <HtmlContentComponent html={introduction.subTitle} />
                </div>
              </div>
            </ModalBaseTitle>
            <ModalBaseContents className="base-conts">
              <div className="dec">
                <HtmlContentComponent html={introduction.contents} />
              </div>
            </ModalBaseContents>

            <div className="btns-wrap">
              <ComponentButtonRadiFillMain
                text="확인"
                onClickBtn={handleClose}
              />
            </div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalIntroduction;
