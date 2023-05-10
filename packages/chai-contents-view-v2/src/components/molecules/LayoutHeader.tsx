import styled from "@emotion/styled";
import {
  CornerListData,
  HeaderCharacterComponent,
  ID,
  LessonMeta,
  Page,
} from "chai-ui-v2";
import React, { useMemo } from "react";
import useLessonColorMapper from "../../hooks/useLessonColorMapper";

interface HdContWrapProps {
  cornerPercent: number;
  lessonColor: {
    main: string;
    sub: string;
  };
}

interface CaiHeaderProps {
  lessonColor: {
    main: string;
    sub: string;
  };
}
interface HdChaWrapProps {
  lessonColor: {
    main: string;
    sub: string;
  };
}

const HdContWrap = styled.div<HdContWrapProps>`
  /* key설명 - width: 100%일 때 after의 배경색을 div의 배경색으로 적용 */
  width: ${(props) =>
    props.cornerPercent > 99 ? "100%" : `${props.cornerPercent}%`};
  /* background-color: ${(props) =>
    props.cornerPercent > 99 ? props.lessonColor.main : "none"}; */
  transition: ${(props) =>
    props.cornerPercent > 99 ? "width 1000ms" : "width 1200ms"};
  min-width: 17%;

  &:after {
    background-color: ${(props) => props.lessonColor.main};
  }

  &:before {
    width: ${(props) =>
      props.cornerPercent > 99 ? "100%" : `${props.cornerPercent}%`};
    min-width: 17%;
    background-color: ${(props) => props.lessonColor.main};
  }

  .bg-flag {
    background-color: ${(props) => props.lessonColor.main};
  }
`;

const CaiHeader = styled.header<CaiHeaderProps>`
  background-color: ${(props) => props.lessonColor.sub};
`;

const HdChaWrap = styled.div<HdChaWrapProps>`
  .txt {
    color: ${(props) => props.lessonColor.main};
  }
`;

interface LayoutHeaderProps {
  corners: CornerListData[];
  cornerId?: ID;
  currentPage?: Page;
  lessonColorCode?: LessonMeta["colorTypeCd"];
}

const LayoutHeader = ({
  corners,
  cornerId,
  currentPage,
  lessonColorCode,
}: LayoutHeaderProps) => {
  const { getLessonColors } = useLessonColorMapper();

  const cornerName = useMemo(() => {
    return corners.find((corner) => {
      return corner.id.toString() === cornerId?.toString();
    })?.name;
  }, [corners, cornerId]);

  const cornerPercent = useMemo(() => {
    const cornerIndex = corners.findIndex(
      (corner) => corner.id.toString() === cornerId?.toString(),
    );
    return ((cornerIndex + 1) / corners.length) * 100;
  }, [corners, cornerId]);

  const character = useMemo(() => {
    return <HeaderCharacterComponent cornerId={cornerId ?? ""} />;
  }, [cornerId]);

  return (
    <CaiHeader
      className="cai-hd"
      lessonColor={getLessonColors(lessonColorCode)}
    >
      <HdContWrap
        className="hd-conts-wrap"
        cornerPercent={cornerPercent}
        lessonColor={getLessonColors(lessonColorCode)}
      >
        <HdChaWrap
          className={`hd-cha-wrap ${
            cornerPercent > 50 ? "second-half" : "none"
          }`}
          lessonColor={getLessonColors(lessonColorCode)}
        >
          <p className="txt">{currentPage?.name}</p>
          {character}
        </HdChaWrap>
        <span className="corner-name">{cornerName}</span>
        <HdChaWrap
          className={`hd-cha-wrap ${
            cornerPercent > 50 ? "none" : "first-half"
          }`}
          lessonColor={getLessonColors(lessonColorCode)}
        >
          <p className="txt">{currentPage?.name}</p>
          {character}
        </HdChaWrap>
        <div className="bg-wrap">
          <div className="bg-flag"></div>
        </div>
      </HdContWrap>
    </CaiHeader>
  );
};

export default LayoutHeader;
