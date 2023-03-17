import styled from "@emotion/styled";
import React from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AddButton from "../atoms/AddButton";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { colorPalette } from "chai-ui-v2";
import CheckBoxWrapper from "../molecules/CheckBoxWrapper";

const CardTabWrapper = styled.div`
  .flex-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TabTitleWrap = styled.div`
  .tab-title-wrap {
    border-radius: 10px;
    background-color: ${colorPalette.bubblegray};

    &.disabled {
      background-color: ${colorPalette.gray550};
    }
  }

  .tab-title {
    border-radius: 10px;
    font-size: 16px;
    background-color: ${colorPalette.bubblegray};

    &:disabled {
      background-color: ${colorPalette.gray550};
    }

    &.active:disabled {
      background-color: ${colorPalette.gray600};
    }
  }

  .tab-title-input-wrap {
    margin: 10px auto;

    > input {
      width: 100%;
      height: 40px;
      padding: 10px 15px;
      border: 1px solid ${colorPalette.gray200};
      border-radius: 10px;
      background-color: transparent;
      font-size: 12px;
      box-sizing: border-box;
      appearance: none;
      outline: none;
      box-shadow: none;
    }
  }
`;

const TabCardWrap = styled.div``;

const TabCard = styled.div`
  position: relative;
  width: 500px;
  min-height: 80px;
  margin-top: 10px;
  padding: 8px;
  border: 1px solid ${colorPalette.gray600};
  border-radius: 16px;

  .btns-wrap {
    justify-content: flex-end;
    align-items: flex-start;
    gap: 16px;
  }
`;

const CardTabTabCreate = () => {
  return (
    <ContentCreatorLayout onDeleteComponent={() => {}}>
      <CardTabWrapper className="card-tab-wrapper">
        <div className="flex-wrap">
          {/* TODO: 클릭시 TabCard 추가 */}
          <AddButton>카드 추가</AddButton>
          <CheckBoxWrapper>탭 사용</CheckBoxWrapper>
        </div>
        <TabTitleWrap className="tab-title-view--wrap">
          {/* TODO: 탭사용을 체크하면 버튼들이 disabled 되고, tab-title-wrap에 클래스 disabled 추가 */}
          <div className="tab-title-wrap disabled">
            <button className="tab-title active" disabled>
              탭 1
            </button>
            <button className="tab-title" disabled>
              탭 2
            </button>
          </div>
          <div className="tab-title-input-wrap">
            <input type="text" placeholder="탭1 타이틀을 입력해주세요" />
          </div>
        </TabTitleWrap>
        <TabCardWrap>
          <TabCard>
            <div className="btns-wrap">
              <button className="btn-comp-select">컴포넌트 선택</button>
              <ObjectDeleteButton />
            </div>
          </TabCard>
        </TabCardWrap>
      </CardTabWrapper>
    </ContentCreatorLayout>
  );
};

export default CardTabTabCreate;
