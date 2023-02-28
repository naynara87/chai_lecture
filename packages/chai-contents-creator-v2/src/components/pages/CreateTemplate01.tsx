import styled from "@emotion/styled";

const CreateEditWrap = styled.div`
  display: flex;
  padding: 40px 24px;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  & > div {
    margin-bottom: 24px;
  }
`;

const CreateEditTop = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px !important;

  button {
    background: white;
    box-shadow: none;
    border: 1px solid #d6d6d6;
    padding: 8px 12px;
    border-radius: 4px;
  }
  button:first-child {
    margin-right: 8px;
  }
  button:last-of-type {
    margin-left: auto;
  }
`;

const CreateEditMain = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 502px;
  border-radius: 20px;
  box-shadow: 0px 4px 19px rgba(145, 145, 145, 0.2);

  & > div {
    width: 100%;
    border: 2px dashed #888888;
    padding: 16px;
  }
  & .btn-comp-select {
    color: #7686d4;
    background: #ffffff;
    border-radius: 50px;
    border: 1px solid #dbe1ff;
    width: 90px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    font-weight: 500;
  }

  & .choice-btn-wrap {
    margin-left: auto;
    text-align: right;
    position: relative;

    & button {
      margin-bottom: 8px;
      z-index: 3;
    }

    & .edit-nav-cont {
      text-align: left;
      position: absolute;
      height: 300px;
      width: 280px;
      overflow-y: scroll;
      box-shadow: 2px 6px 12px #00000026;
      padding: 16px;
      right: 0;
      transform: translateY(-100%);
      background-color: #ffffff;
      display: none;
      transition: all 0.2s;
      & > p {
        font-size: 12px;
        font-weight: 500;
        color: #565656;
        margin-bottom: 10px;
      }
      & ul {
        li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;

          div {
            width: 50px;
            height: 50px;
            font-size: 12px;
            font-weight: 700;
            background-color: #d9d9d9;
            line-height: 50px;
            text-align: center;
            border-radius: 4px;
            margin-right: 8px;
          }

          p {
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }

    &.active .edit-nav-cont {
      transform: translateY(0%);
      display: block;
    }
  }
`;

const CreateAddBtn = styled.button`
  background-color: #ffffff;
  height: 102px;
  box-shadow: 0px 4px 19px rgba(145, 145, 145, 0.2);
  border-radius: 20px;
  color: #888888;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateTemplate01 = () => {
  return (
    <CreateEditWrap>
      <CreateEditTop>
        <button>레이아웃 변경</button>
        <button>미리보기</button>
        <button>학습 변경 간지 추가</button>
      </CreateEditTop>
      <div>
        <CreateEditMain>
          <div>
            <div className="choice-btn-wrap">
              {/*
            btn-comp-select 버튼 클릭시 부모 div choice-btn-wrap에 active 클래스 추가 (toggle)
            */}
              <button className="btn-comp-select">컴포넌트 선택</button>
              <div className="edit-nav-cont">
                <p>기본형</p>
                <ul>
                  <li>
                    <div>50*50</div>
                    <p>텍스트</p>
                  </li>
                  <li>
                    <div>50*50</div>
                    <p>텍스트</p>
                  </li>
                </ul>
                <p>대화형</p>
                <ul>
                  <li>
                    <div>50*50</div>
                    <p>텍스트</p>
                  </li>
                  <li>
                    <div>50*50</div>
                    <p>텍스트</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CreateEditMain>
      </div>
      {/*
      TODO: lsh 슬라이드 추가 버튼 클릭 시 레이아웃 선택화면으로 이동
      */}
      <CreateAddBtn>+&nbsp;&nbsp; 슬라이드 추가</CreateAddBtn>
    </CreateEditWrap>
  );
};

export default CreateTemplate01;
