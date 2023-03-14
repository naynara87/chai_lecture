import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { colorPalette } from "../../assets";
import { ID, useGlobalAudio } from "../../core";
import { ImgProfileDefaultComponent } from "../atoms";
import ComponentButtonRadiFillOrange from "../atoms/ComponentButtonRadiFillOrange";
import AudioRecorder from "./AudioRecorder";
import { v4 as uuidv4 } from "uuid";

const BubbleWrap = styled.div`
  background-color: ${colorPalette.bubbleyellow};
`;

interface RolePlayingCharacterComponentProps {
  id: ID;
  selectCharacterId?: ID;
  position: "left" | "right";
  name: string;
  text: string;
  pronunciation: string;
  meaning: string;
  audioSrc?: string;
}

const RolePlayingCharacterComponent = ({
  id,
  selectCharacterId,
  position,
  name,
  text,
  pronunciation,
  meaning,
  audioSrc,
}: RolePlayingCharacterComponentProps) => {
  const [isShowHint, setIsShowHint] = useState(false);

  const audioUuidRef = useRef(uuidv4());

  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleClickAudioButton,
    handleAudioReset,
  } = useGlobalAudio();

  const resetAudio = useCallback(() => {
    if (globalAudioId.toString().includes(`rolePlay_${audioUuidRef.current}`)) {
      handleAudioReset();
    }
  }, [globalAudioId, handleAudioReset]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    globalAudioRef?.current?.addEventListener("ended", resetAudio);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", resetAudio);
      }
    };
  }, [globalAudioRef, handleAudioReset, globalAudioId, resetAudio]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  const pinyin = useMemo(() => {
    if (selectCharacterId !== id) {
      return <p className="pinyin">{pronunciation}</p>;
    } else {
      if (isShowHint) {
        return <p className="pinyin">{pronunciation}</p>;
      } else {
        return (
          <ComponentButtonRadiFillOrange
            text="HINT"
            onClickBtn={() => setIsShowHint(true)}
          />
        );
      }
    }
  }, [id, isShowHint, selectCharacterId, pronunciation]);

  const isCurrentAudioPlay = useMemo(() => {
    if (
      globalAudioId === `rolePlay_${audioUuidRef.current}_0` &&
      globalAudioState === "playing"
    ) {
      return true;
    } else {
      return false;
    }
  }, [globalAudioId, globalAudioState]);

  return (
    <li
      className={`conversation-wrap ${
        selectCharacterId === id ? "choice" : ""
      } ${position === "right" ? "right-conts" : ""} ${
        isCurrentAudioPlay ? "active" : ""
      }`}
    >
      <div className="img-grp">
        <div className="img-wrap">
          {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
          <div className="img-round">
            <button
              className="btn-profile"
              onClick={() => {
                if (isCurrentAudioPlay) {
                  handleAudioReset();
                  return;
                }
                handleClickAudioButton(
                  "rolePlay",
                  audioUuidRef.current,
                  0,
                  audioSrc ?? "",
                );
              }}
            >
              {/* TODO: CPM 리소스 받으면 이미지태그로 수정 */}
              <ImgProfileDefaultComponent />
            </button>
          </div>
        </div>
        <p className="name">{name}</p>
      </div>
      <div className="txt-wrapper">
        <div className="txt-wrap">
          <BubbleWrap className="bubble-wrap">
            <p className="chinese">{text}</p>
            {pinyin}
            {id === selectCharacterId && <p className="mean">{meaning}</p>}
          </BubbleWrap>
        </div>
        {selectCharacterId === id && <AudioRecorder />}
      </div>
    </li>
  );
};

export default RolePlayingCharacterComponent;
