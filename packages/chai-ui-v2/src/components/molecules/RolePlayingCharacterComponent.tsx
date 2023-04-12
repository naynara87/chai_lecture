import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { colorPalette } from "../../assets";
import { ID, RolePlayingCharacter, useGlobalAudio } from "../../core";
import { ImgProfileDefaultComponent } from "../atoms";
import ComponentButtonRadiFillOrange from "../atoms/ComponentButtonRadiFillOrange";
import { v4 as uuidv4 } from "uuid";
import AudioRecorder from "../contents/AudioRecorder";

interface BubbleWrapProps {
  backgroundColor: string;
}
const BubbleWrap = styled.div<BubbleWrapProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colorPalette.bubbleyellow};
`;

interface RolePlayingCharacterComponentProps {
  id: ID;
  selectCharacterId?: ID;
  position: "left" | "right";
  character: RolePlayingCharacter | undefined;
  text: string;
  pronunciation: string;
  meaning: string;
  audioSrc?: string;
}

const RolePlayingCharacterComponent = ({
  id,
  selectCharacterId,
  position,
  character,
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
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", resetAudio);
    }
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
    }
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
              <ImgProfileDefaultComponent imageSrc={character?.src} />
            </button>
          </div>
        </div>
        <p className="name">{character?.name ?? ""}</p>
      </div>
      <div className="txt-wrapper">
        <div className="txt-wrap">
          <BubbleWrap
            className="bubble-wrap"
            backgroundColor={character?.backgroundColor ?? ""}
          >
            <p className="chinese">{text}</p>
            {pinyin}
            {id === selectCharacterId && <p className="mean">{meaning}</p>}
          </BubbleWrap>
        </div>
        {selectCharacterId === id && (
          <AudioRecorder contents={{ id: id, type: "recorder", data: {} }} />
        )}
      </div>
    </li>
  );
};

export default RolePlayingCharacterComponent;
