import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { ListenWordData } from "../../types/templateContents";
import WordsContentComponent from "../atoms/WordsContentComponent";

interface ListenWordContentProps {
  datas: ListenWordData[];
}

const TextCardWrapper = styled.div`
  text-align: center;
`;

const ListenWordContent = (datas: ListenWordContentProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSrc, setAudioSrc] = useState("");
  const handleClickWordContent = (src: string) => {
    setAudioSrc(src);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
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
