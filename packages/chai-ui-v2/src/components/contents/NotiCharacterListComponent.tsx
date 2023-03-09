import React, { useMemo } from "react";
import { NotiCharacterListContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import styled from "@emotion/styled";
import arrow from "../../assets/images/icon/icon_contsinfo_tail.svg";
import profileImg from "../../assets/images/img/cha_profile01.png";
import { vw, vh, colorPalette } from "../../assets";

interface NotiCharacterListComponentProps {
  contents: NotiCharacterListContentData;
}

const NotiWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${vw(50)};
`;

const NotiList = styled.li`
  width: ${vw(420)};
`;

const TextBubbleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${vh(280)};
  font-weight: 600;
  font-size: ${vw(32)};
  white-space: pre-line;
  background-color: ${colorPalette.bubblegray};
  border-radius: ${vw(20)};
  position: relative;
  text-align: center;
  padding: ${vw(30)};

  &:after {
    content: "";
    display: block;
    background-image: url("${arrow}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: ${vw(38)};
    height: ${vh(37)};
  }
`;

const ImageWrap = styled.div`
  width: ${vw(200)};
  height: ${vw(200)};
  border-radius: 50%;

  overflow: hidden;
  margin: ${vw(60)} auto 0;

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
            <img src={profileImg} alt="" />
          </ImageWrap>
        </NotiList>
      );
    });
  }, [contents.data]);

  return <NotiWrapper>{notiCharacterList}</NotiWrapper>;
};

export default NotiCharacterListComponent;
