import React, { useMemo } from "react";
import { NotiCharacterListContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import styled from "@emotion/styled";
import arrow from "../../assets/images/icon/icon_contsinfo_tail.svg";
import ProfileDefault from "../../assets/images/img/cha_profile01.png";
import { colorPalette } from "../../assets";

export interface NotiCharacterListComponentProps {
  contents: NotiCharacterListContentData;
}

const NotiWrapper = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4vmin;
  flex-wrap: wrap;
  margin-top: 5vmin;
`;

const NotiList = styled.li`
  width: 22%;
`;

const TextBubbleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vmin;
  font-weight: 600;
  font-size: 2.4vmin;
  white-space: pre-line;
  background-color: ${colorPalette.bubblegray};
  border-radius: 3vmin;
  position: relative;
  text-align: center;
  padding: 1em;

  &:after {
    content: "";
    display: block;
    background-image: url("${arrow}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top: calc(100% - 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 4vmin;
    height: 3vmin;
  }
`;

const ImageWrap = styled.div`
  width: 20vmin;
  height: 20vmin;

  overflow: hidden;
  margin: 6vmin auto 0;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NotiCharacterListComponent = ({
  contents,
}: NotiCharacterListComponentProps) => {
  const notiCharacterList = useMemo(() => {
    return contents.data.map((notiCharacter, notiCharacterIndex) => {
      return (
        <NotiList key={notiCharacterIndex}>
          <TextBubbleWrap>
            <HtmlContentComponent html={notiCharacter.text} />
          </TextBubbleWrap>

          <ImageWrap>
            {/*
            NOTE: lsh dummyData에서 characterMapping 작업이 되어있지않아 우선 공통이미지로 넣었습니다.
            <img src={notiCharacter.character.src} alt="" />
            */}
            <img src={notiCharacter.character.src || ProfileDefault} alt="" />
          </ImageWrap>
        </NotiList>
      );
    });
  }, [contents.data]);

  return (
    <div>
      <NotiWrapper>{notiCharacterList}</NotiWrapper>
    </div>
  );
};

export default NotiCharacterListComponent;
