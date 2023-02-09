import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { ListenWordData } from "../../types/templateContents";
import WordsContentComponent from "./WordsContentComponent";

interface ListenWordContentProps {
  datas: ListenWordData[];
}

const TextCardWrapper = styled.div`
  text-align: center;
`;

/**
 * @deprecated
 * textBoxes and audioComponent를 사용
 */
const ListenWordContent = (datas: ListenWordContentProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioIndex, setAudioIndex] = useState(0);
  const [audioState, setAudioState] = useState("pause");
  const handleClickWordContent = (src: string, index: number) => {
    if (audioRef.current && audioIndex !== index) {
      setAudioIndex(index);
      setAudioSrc(src);
      audioRef.current.pause();
      audioRef.current.load();
      void audioRef.current.play();
      setAudioState("play");
    }
    if (audioRef.current && audioIndex === index) {
      if (audioState === "play") {
        audioRef.current.pause();
        setAudioState("pause");
      } else {
        void audioRef.current.play();
        setAudioState("play");
      }
    }
  };
  return (
    <>
      <audio ref={audioRef}>
        <source src={audioSrc}></source>
      </audio>
      <TextCardWrapper>
        {datas.datas.map((item, index) => {
          return (
            <WordsContentComponent
              key={index}
              index={index}
              text={item.text}
              audio={item.audio}
              meaning={item.meaning}
              handleClickWordContent={handleClickWordContent}
            />
          );
        })}
      </TextCardWrapper>
    </>
  );
};

export default ListenWordContent;
