import styled from "@emotion/styled";
import {
  CreateTemplateWrap,
  CreateEditTop,
  BtnChangeLayout,
  BtnPreview,
  BtnAddGanjiChange,
  CreateEditMainWrap,
  CreateEditMain,
  DashBoxArea,
  CreateTemplateChoiceBtnWrap,
  CreateTemplateNavWrap,
  CreateTemplateNav,
  NavList,
  CreateAddBtn,
} from "../../styles/template";

const CreateEditMainWrap37 = styled(CreateEditMainWrap)`
  ${CreateEditMain}:nth-child(1) {
    width: 30%;
  }
  ${CreateEditMain}:nth-child(2) {
    width: 70%;
  }
`;
const CreateTemplate02 = () => {
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
      <CreateEditMainWrap37>
        <CreateEditMain>
          <DashBoxArea>
            <CreateTemplateChoiceBtnWrap>
              {/*
            TODO: btn-comp-select 버튼 클릭시 CreateTemplateNavWrap 에 active 클래스 추가 (toggle)
            */}
              <button className="btn-comp-select">컴포넌트 선택</button>
              <CreateTemplateNavWrap>
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
      </CreateEditMainWrap37>
      {/*
      TODO: lsh 슬라이드 추가 버튼 클릭 시 레이아웃 선택화면으로 이동
      */}
      <CreateAddBtn>+&nbsp;&nbsp; 슬라이드 추가</CreateAddBtn>
    </CreateTemplateWrap>
  );
};

export default CreateTemplate02;
