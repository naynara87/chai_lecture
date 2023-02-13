import styled from "@emotion/styled";
import React from "react";
import iconLevelRed from "../../images/img/hd_red.svg";
import iconLevelOrange from "../../images/img/hd_orange.svg";
import iconLevelYellow from "../../images/img/hd_yellow.svg";
import iconLevelGreen from "../../images/img/hd_green.svg";
import iconLevelBlue from "../../images/img/hd_blue.svg";
import iconLevelNavy from "../../images/img/hd_navy.svg";
import iconLevelPurple from "../../images/img/hd_purple.svg";

// TODO: 레벨별 컬러는 헤더에서만 사용
const Level1Main = '#EE4141';
const Level1Sub = '#F89E9E';
const Level2Main = '#FF6700';
const Level2Sub = '#FFA861';
const Level3Main = '#FFB900';
const Level3Sub = '#FFD86C';
const Level4Main = '#1FB65D';
const Level4Sub = '#81D19D';
const Level5Main = '#3D89FA';
const Level5Sub = '#8CB5EF';
const Level6Main = '#3C53A7';
const Level6Sub = '#778AD0';
const Level7Main = '#9A45EF';
const Level7Sub = '#B991FA';

const HdContWrap = styled.div`
/* TODO: width: 100%일 때 after의 배경색을 div의 배경색으로 적용 */
  width: 42%;
  background-image: url("${iconLevelRed}");

  &:after {
		background-color: ${Level1Main};
  }
`;

const CaiHeader = styled.header`
  background-color: ${Level1Sub};
`;

const HdChaWrap = styled.div`
  .txt {
    color: ${Level1Main};
  }
`;

const LayoutHeader = () => {
  return (
    <CaiHeader className="cai-hd">
      {/* TODO: 코너가 바뀌면 width가 변경 */}
      <HdContWrap className="hd-conts-wrap">
        {/* TODO: width 50%이상에서 second-half 보이고, width 50%미만에서 first-half 보임 */}
        {/* 우선 클래스 none 로 가림 */}
        <HdChaWrap className="hd-cha-wrap second-half none">
          <p className="txt">{'학습목표 자가체크'}</p>
          <img src="/images/img/cha_kkungi_positive.png" alt="꿍이" className="img" />
        </HdChaWrap>
        <span className="corner-name">{'학습 시작'}</span>
        <HdChaWrap className="hd-cha-wrap first-half">
          <img src="/images/img/cha_kkungi_positive.png" alt="꿍이" className="img" />
          <p className="txt">{'학습목표 자가체크'}</p>
        </HdChaWrap>
      </HdContWrap>
    </CaiHeader>
  );
};

export default LayoutHeader;
