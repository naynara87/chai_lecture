import styled from "@emotion/styled";
import { colorPalette, ComponentButtonRadiFillMain } from "chai-ui-v2";
import React from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ChaProfile01 from "../../assets/images/img/cha_profile01.png";
import IconPlus from "../../assets/images/icon/icon_image.svg";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import UrlInputWrapper from "../molecules/UrlInputWrapper";
import AddButton from "../atoms/AddButton";

const TrainingWrapper = styled.div`
  .training-create-wrap {
    margin-bottom: 50px;
  }

  .training-list {
    position: relative;
  }

  .btn-delete {
    z-index: 1;
    position: absolute;
    top: 10px;
    left: auto;
    right: 10px;
  }

  .img-wrap {
    background-color: ${colorPalette.gray200};
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${IconPlus});
  }
`;

const CharacterCardListCreate = () => {
  return (
    <ContentCreatorLayout onDeleteComponent={() => {}}>
      <TrainingWrapper className="training-wrapper">
        {/* TODO: key설명 - training-end 클래스 추가되면 높이 변경, 버튼 추가 */}
        <AddButton>학습목표 추가</AddButton>
        <div className="training-list-wrap training-end">
          {/* 반복영역 */}
          <div className="training-create-wrap">
            <div className="training-list">
              <ObjectDeleteButton />
              <div className="gradi-wrap">
                <div className="gradi-conts-wrap">
                  <div className="img-wrap"></div>
                  <p className="title">텍스트를 입력해주세요</p>
                </div>
              </div>
              <div className="white-wrap">
                <p className="text">텍스트를 입력해주세요</p>
                <div className="btns-wrap">
                  <ComponentButtonRadiFillMain text="학습 요약" />
                </div>
              </div>
            </div>
            <UrlInputWrapper typeText="image" />
          </div>
          {/* end 반복영역 */}
          <div className="training-create-wrap">
            <div className="training-list">
              <ObjectDeleteButton />
              <div className="gradi-wrap">
                <div className="gradi-conts-wrap">
                  <div className="img-wrap">
                    <img src={ChaProfile01} alt="" className="img" />
                  </div>
                  <p className="title">텍스트를 입력해주세요</p>
                </div>
              </div>
              <div className="white-wrap">
                <p className="text">텍스트를 입력해주세요</p>
                <div className="btns-wrap">
                  <ComponentButtonRadiFillMain text="학습 요약" />
                </div>
              </div>
            </div>
            <UrlInputWrapper typeText="image" />
          </div>
        </div>
      </TrainingWrapper>
    </ContentCreatorLayout>
  );
};

export default CharacterCardListCreate;
