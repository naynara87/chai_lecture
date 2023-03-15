import styled from "@emotion/styled";
import {
  CornerListData,
  ID,
  ImgCharacterComponent,
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
  /* TODO: key설명 - width: 100%일 때 after의 배경색을 div의 배경색으로 적용 */
  width: ${(props) =>
    props.cornerPercent > 99 ? "103%" : `${props.cornerPercent}%`};

  &:after {
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

  console.log("cornerPercent", cornerPercent);

  return (
    <CaiHeader
      className="cai-hd"
      lessonColor={getLessonColors(lessonColorCode)}
    >
      {/* TODO: key설명 - 코너가 바뀌면 width가 변경 */}
      <HdContWrap
        className="hd-conts-wrap"
        cornerPercent={cornerPercent}
        lessonColor={getLessonColors(lessonColorCode)}
      >
        {/* TODO: key설명 - width 50%이상에서 second-half 보이고, width 50%미만에서 first-half 보임 */}
        {/* 우선 클래스 none 로 가림 */}
        <HdChaWrap
          className={`hd-cha-wrap ${
            cornerPercent > 50 ? "second-half" : "first-half"
          }`}
          lessonColor={getLessonColors(lessonColorCode)}
        >
          <p className="txt">{currentPage?.name}</p>
          <ImgCharacterComponent
            characterType="kkungiHeader"
            characterAlt="꿍이"
          />
        </HdChaWrap>
        <span className="corner-name">{cornerName}</span>
        <div className="bg-wrap">
          <div className="bg-flag"></div>
        </div>
      </HdContWrap>
    </CaiHeader>
  );
};

export default LayoutHeader;
