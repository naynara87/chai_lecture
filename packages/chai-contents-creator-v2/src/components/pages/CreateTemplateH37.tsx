import styled from "@emotion/styled";
import {
  CreateEditMainWrap,
  CreateEditMain,
  DashBoxArea,
  CreateTemplateChoiceBtnWrap,
  CreateTemplateNavWrap,
  CreateTemplateNav,
  NavList,
} from "../../styles/template";
import { PageCommonProps } from "../../types/page";
import PageHeader from "../molecules/PageHeader";

const CreateEditMainWrap37 = styled(CreateEditMainWrap)`
  ${CreateEditMain}:nth-child(1) {
    width: 30%;
  }
  ${CreateEditMain}:nth-child(2) {
    width: 70%;
  }
  gap: 24px;
`;
const CreateTemplateH37 = ({
  templateType,
  ...pageHeaderProps
}: PageCommonProps) => {
  return (
    <>
      <PageHeader {...pageHeaderProps} />
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
    </>
  );
};

export default CreateTemplateH37;
