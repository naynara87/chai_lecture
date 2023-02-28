import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonCSS = css`
  background: white;
  box-shadow: none;
  border: 1px solid #d6d6d6;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #565656;
`;

const CreateTemplateWrap = styled.div`
  display: flex;
  padding: 40px 24px;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
`;

const CreateEditTop = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;

const BtnChangeLayout = styled.button`
  ${buttonCSS}
  margin-right: 8px;
`;
const BtnPreview = styled.button`
  ${buttonCSS}
`;
const BtnAddGanjiChange = styled.button`
  ${buttonCSS}
  margin-left: auto;
`;

const CreateEditMainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const CreateTemplateNavWrap = styled.div`
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

  .nav-tit {
    font-size: 12px;
    font-weight: 500;
    color: #565656;
    margin-bottom: 10px;
  }

  &.active {
    transform: translateY(0%);
    display: block;
  }
`;

const NavList = styled.ul`
  .nav-li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .thumb-comp {
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
  .txt-comp {
    font-size: 14px;
    font-weight: 400;
  }
`;

const CreateTemplateChoiceBtnWrap = styled.div`
  margin-left: auto;
  text-align: right;
  position: relative;

  .btn-comp-select {
    margin-bottom: 8px;
  }
`;

const DashBoxArea = styled.div`
  width: 100%;
  border: 2px dashed #888888;
  padding: 16px;
`;

const CreateTemplateNav = styled.div`
  margin-bottom: 14px;
`;
const CreateEditMain = styled.div`
  display: flex;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  height: 502px;
  border-radius: 20px;
  box-shadow: 0px 4px 19px rgba(145, 145, 145, 0.2);
  width: 50%;

  margin-bottom: 24px;

  &:nth-of-type(1) {
    margin-right: 12px;
  }
  &:nth-of-type(2) {
    margin-left: 12px;
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
  margin-bottom: 24px;
`;

const CreateTemplate03 = () => {
  return (
    <CreateTemplateWrap>
      <CreateEditTop>
        {/* TODO: lsh 버튼 클릭시 CreateLayout으로 이동 */}
        <BtnChangeLayout>레이아웃 변경</BtnChangeLayout>
        {/* TODO: lsh 버튼 클릭시 미리보기 화면 출력 */}
        <BtnPreview>미리보기</BtnPreview>
        {/* TODO: lsh 버튼 클릭시 학습변경 간지 간지 추가 */}
        <BtnAddGanjiChange>학습 변경 간지 추가</BtnAddGanjiChange>
      </CreateEditTop>
      <CreateEditMainWrap>
        <CreateEditMain>
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              {/*
            TODO: btn-comp-select 버튼 클릭시 CreateTemplateNavWrap 에 active 클래스 추가 (toggle)
            */}
              <button className="btn-comp-select">컴포넌트 선택</button>
              <CreateTemplateNavWrap className="active">
                <CreateTemplateNav>
                  <p className="nav-tit">기본형</p>
                  {/* TODO: lsh 버튼 클릭시 선택한 컴포넌트 추가 */}
                  <NavList>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                  </NavList>
                </CreateTemplateNav>
                <CreateTemplateNav>
                  <p className="nav-tit">기본형</p>
                  <NavList>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                  </NavList>
                </CreateTemplateNav>
              </CreateTemplateNavWrap>
            </CreateTemplateChoiceBtnWrap>
          </DashBoxArea>
        </CreateEditMain>
        <CreateEditMain>
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              {/*
            TODO: btn-comp-select 버튼 클릭시 CreateTemplateNavWrap 에 active 클래스 추가 (toggle)
            */}
              <button className="btn-comp-select">컴포넌트 선택</button>
              <CreateTemplateNavWrap className="active">
                <CreateTemplateNav>
                  <p className="nav-tit">기본형</p>
                  <NavList>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                  </NavList>
                </CreateTemplateNav>
                <CreateTemplateNav>
                  <p className="nav-tit">기본형</p>
                  <NavList>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                    <li className="nav-li">
                      <div className="thumb-comp">50*50</div>
                      <p className="txt-comp">텍스트</p>
                    </li>
                  </NavList>
                </CreateTemplateNav>
              </CreateTemplateNavWrap>
            </CreateTemplateChoiceBtnWrap>
          </DashBoxArea>
        </CreateEditMain>
      </CreateEditMainWrap>
      {/*
      TODO: lsh 슬라이드 추가 버튼 클릭 시 레이아웃 선택화면으로 이동
      */}
      <CreateAddBtn>+&nbsp;&nbsp; 슬라이드 추가</CreateAddBtn>
    </CreateTemplateWrap>
  );
};

export default CreateTemplate03;
