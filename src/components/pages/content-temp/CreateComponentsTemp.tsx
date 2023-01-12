import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCreateContent from "../../../hooks/useCreateContent";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";
import "./common.scss";
import ModalLayoutChange from "./ModalLayoutChange";
import ModalComponentChoice from "./ModalComponentChoice";
import useCreateContentMapper from "../../../hooks/contentCreate/useCreateContentMapper";
import { Content } from "../../../types/appData";

const PageLayout = styled.div`
  .btn-wrap {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const CreateComponentsTemp = () => {
  const { contentLayout } = useCreateContent();
  const navigate = useNavigate();
  const [componentList, setComponentList] = useState<Content[]>([]);

  const { getCreateContentComponent, getDefaultContentComponent, componentNames } =
    useCreateContentMapper();

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
            {/* <button className="btn btn-border-primary">글자</button>
            <button className="btn btn-border-primary">사진</button>
            <button className="btn btn-border-primary">음원</button>
            <button className="btn btn-border-primary">영상</button>
            <button className="btn btn-border-primary">컴포넌트</button> */}
            {componentNames.map((componentName) => {
              return (
                <button
                  className="btn btn-border-primary"
                  onClick={() =>
                    setComponentList((prev) => [...prev, getDefaultContentComponent(componentName)])
                  }
                >
                  {componentName}
                </button>
              );
            })}
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
            {componentList.map((component) => {
              return getCreateContentComponent(component);
            })}
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
