import styled from "@emotion/styled";
import React from "react";
import ImgCharacter from "../../images/img/cha_kkungi_positive.png";
import IconLevel1 from "../../images/img/hd_red.svg";
import IconLevel2 from "../../images/img/hd_orange.svg";
import IconLevel3 from "../../images/img/hd_yellow.svg";
import IconLevel4 from "../../images/img/hd_green.svg";
import IconLevel5 from "../../images/img/hd_blue.svg";
import IconLevel6 from "../../images/img/hd_navy.svg";
import IconLevel7 from "../../images/img/hd_purple.svg";

// TODO: 레벨별 컬러는 헤더에서만 사용
const MainLevel1 = '#EE4141';
const SubLevel1 = '#F89E9E';
const MainLevel2 = '#FF6700';
const SubLevel2 = '#FFA861';
const MainLevel3 = '#FFB900';
const SubLevel3 = '#FFD86C';
const MainLevel4 = '#1FB65D';
const SubLevel4 = '#81D19D';
const MainLevel5 = '#3D89FA';
const SubLevel5 = '#8CB5EF';
const MainLevel6 = '#3C53A7';
const SubLevel6 = '#778AD0';
const MainLevel7 = '#9A45EF';
const SubLevel7 = '#B991FA';

const HdContWrap = styled.div`
/* TODO: width: 100%일 때 after의 배경색을 div의 배경색으로 적용 */
  width: 42%;
  background-image: url("${IconLevel1}");

  &:after {
		background-color: ${MainLevel1};
  }
`;

const CaiHeader = styled.header`
  background-color: ${SubLevel1};
`;

const HdChaWrap = styled.div`
  .txt {
    color: ${MainLevel1};
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
          <img src={ImgCharacter} alt="꿍이" className="img" />
        </HdChaWrap>
        <span className="corner-name">{'학습 시작'}</span>
        <HdChaWrap className="hd-cha-wrap first-half">
          <img src={ImgCharacter} alt="꿍이" className="img" />
          <p className="txt">{'학습목표 자가체크'}</p>
        </HdChaWrap>
      </HdContWrap>
    </CaiHeader>
  );
};

export default LayoutHeader;
