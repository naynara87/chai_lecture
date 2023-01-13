import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";
import "./common.scss";
import ModalLayoutChange from "./ModalLayoutChange";
import ModalComponentChoice from "./ModalComponentChoice";
import useCreateContent from "../../../hooks/contentCreate/useCreateContent";
import uuid from "react-uuid";

const PageLayout = styled.div`
  .btn-wrap {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const CreateComponentsTemp = () => {
  const { contentLayout } = useCreateContent();
  const navigate = useNavigate();

  const { componentNames, components, addNewComponent, addComponentToExistingComponentById } =
    useCreateContent();

  useEffect(() => {
    console.log("contentLayout", contentLayout);
    // if (!contentLayout) {
    //   navigate(CREATE_CONTENT_LAYOUT_URL);
    // }
  }, [contentLayout, navigate]);

  const handleLayoutClick = () => {
    console.log("레이아웃 설정 버튼 클릭");
    const isConfirmed = window.confirm("레이아웃을 변경하시겠습니까?");
    if (isConfirmed) {
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  };

  return (
    <PageLayout>
      <header className="layout-hd">
        <div className="flex-btw-wrap">
          <div className="left-wrap">
            <h1 className="logo-wrap">
              <img
                src={`${process.env.PUBLIC_URL}images/bubblecon/bubblecon_logo.png`}
                alt="bubblecon_logo"
              />
            </h1>
            <div className="btn-wrap">
              <button className="btn btn-border-primary">뒤로</button>
              <button className="btn btn-border-primary">앞으로</button>
            </div>
          </div>
          <div className="right-wrap">
            <div className="btn-wrap">
              <span>자동저장</span>
              <button className="btn btn-border-primary">저장</button>
              <button className="btn btn-border-primary">복사 & 붙여넣기</button>
            </div>
          </div>
        </div>
      </header>
      <main className="layout-main">
        <div className="flex-btw-wrap">
          <div className="btn-wrap">
            <button className="btn btn-border-primary" onClick={handleLayoutClick}>
              레이아웃 설정
            </button>

            <ModalLayoutChange />
          </div>

          <div className="btn-wrap">
            <div>컴포넌트 새로 추가</div>
            {componentNames.map((componentName) => {
              return (
                <button
                  key={componentName}
                  className="btn btn-border-primary"
                  onClick={() => addNewComponent(componentName)}
                >
                  {componentName}
                </button>
              );
            })}
            <div>
              <div>기존 컴포넌트에 추가</div>
              {componentNames.map((componentName) => {
                return (
                  <button
                    key={componentName}
                    className="btn btn-border-primary"
                    // FIXME: 임시로 id를 설정 - 기존 컴포넌트에 추가되는 버튼(또는 함수실행)은 저작 컴포넌트 안으로 들어가야 함
                    onClick={() =>
                      addComponentToExistingComponentById(
                        componentName,
                        "49a56b39-02d8-5878-0db3-9f5a63a29e7b",
                      )
                    }
                  >
                    {componentName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="create-page-wrap">
          {/* 
          제목 영역이 없어졌으므로 주석 처리
          <div className="page-title-wrap">
            제목의 높이는 이 프로젝트의 title height를 scss에 옮겨서 가져옴
          </div> */}
          <div className="page-conts-wrap">
            {/* 컴포넌트가 추가되는 영역 */}
            {components}
          </div>
        </div>
      </main>
      <footer className="layout-ft">
        <div className="flex-btw-wrap">
          <div className="left-wrap">
            <div className="btn-wrap">
              <button className="btn btn-border-primary">이전</button>
              <button className="btn btn-border-primary">삭제</button>
            </div>
          </div>
          <div className="center-wrap">
            {"1"} / {"20"}
          </div>
          <div className="right-wrap">
            <div className="btn-wrap">
              <button className="btn btn-border-primary">편집</button>
              <button className="btn btn-border-primary">저장</button>
              <button className="btn btn-border-primary">다음</button>
            </div>
          </div>
        </div>
      </footer>

      <ModalComponentChoice />
    </PageLayout>
  );
};

export default CreateComponentsTemp;
