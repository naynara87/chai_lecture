import styled from "@emotion/styled";
import { colorPalette, ImgCharacterComponent } from "chai-ui-v2";
import React from "react";

// TODO: key설명 - 레벨별 컬러는 헤더에서만 사용
// const MainLevel2 = '#FF6700';
// const SubLevel2 = '#FFA861';
// const MainLevel3 = '#FFB900';
// const SubLevel3 = '#FFD86C';
// const MainLevel4 = '#1FB65D';
// const SubLevel4 = '#81D19D';
// const MainLevel5 = '#3D89FA';
// const SubLevel5 = '#8CB5EF';
// const MainLevel6 = '#3C53A7';
// const SubLevel6 = '#778AD0';
// const MainLevel7 = '#9A45EF';
// const SubLevel7 = '#B991FA';

const HdContWrap = styled.div`
  /* TODO: key설명 - width: 100%일 때 after의 배경색을 div의 배경색으로 적용 */
  width: 52%;

  &:after {
    background-color: ${colorPalette.red700};
  }
  
  .bg-flag {
    background-color: ${colorPalette.red700};
  }
`;

const CaiHeader = styled.header`
  background-color: ${colorPalette.red200};
`;

const HdChaWrap = styled.div`
  .txt {
    color: ${colorPalette.red700};
  }
`;

const LayoutHeader = () => {
  return (
    <CaiHeader className="cai-hd">
      {/* TODO: key설명 - 코너가 바뀌면 width가 변경 */}
      <HdContWrap className="hd-conts-wrap">
        {/* TODO: key설명 - width 50%이상에서 second-half 보이고, width 50%미만에서 first-half 보임 */}
        {/* 우선 클래스 none 로 가림 */}
        <HdChaWrap className="hd-cha-wrap second-half">
          <p className="txt">{"학습목표 자가체크"}</p>
          <ImgCharacterComponent
            characterType="kkungiHeader"
            characterAlt="꿍이"
          />
        </HdChaWrap>
        <span className="corner-name">{"학습 시작"}</span>
        <HdChaWrap className="hd-cha-wrap first-half none">
          <ImgCharacterComponent
            characterType="kkungiHeader"
            characterAlt="꿍이"
          />
          <p className="txt">{"학습목표 자가체크"}</p>
        </HdChaWrap>
        <div className="bg-wrap">
          <div className="bg-flag"></div>
        </div>
      </HdContWrap>
    </CaiHeader>
  );
};

export default LayoutHeader;
