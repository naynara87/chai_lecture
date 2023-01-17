import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";
import "./common.scss";
import ModalLayoutChange from "./ModalLayoutChange";
import ModalComponentChoice from "./ModalComponentChoice";
import useCreateContent from "../../../hooks/contentCreate/useCreateContent";
import CreateTP01Layout from "./Layouts/CreateTP01Layout";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
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

  const {
    componentList,
    componentNames,
    components,
    addNewComponent,
    addComponentToExistingComponentById,
  } = useCreateContent();

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

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const componentIndex = parseInt(result.destination?.droppableId.slice(-1)!);
      if (componentList[componentIndex]) {
        alert("이미 컴포넌트가 존재하는 칸입니다.");
        return;
      }
      addNewComponent(result.draggableId as Content["type"], componentIndex);
    },
    [addNewComponent, componentList],
  );

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
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={() => {}}>
          <div className="flex-btw-wrap">
            <div className="btn-wrap">
              <button className="btn btn-border-primary" onClick={handleLayoutClick}>
                레이아웃 설정
              </button>

              <ModalLayoutChange />
            </div>

            <Droppable droppableId="btn-wrap" isDropDisabled={true}>
              {(provided) => (
                <div className="btn-wrap" {...provided.droppableProps} ref={provided.innerRef}>
                  {componentNames.map((componentName, index) => {
                    return (
                      <Draggable draggableId={componentName} key={index} index={index}>
                        {(provided) => (
                          <span
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            key={componentName}
                            className="btn btn-border-primary"
                            onClick={() => addNewComponent(componentName)}
                          >
                            {componentName}
                          </span>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="create-page-wrap">
            {/* 
          제목 영역이 없어졌으므로 주석 처리
          <div className="page-title-wrap">
            제목의 높이는 이 프로젝트의 title height를 scss에 옮겨서 가져옴
          </div> */}
            <CreateTP01Layout
              componentList={componentList}
              components={components}
              addNewComponent={addNewComponent}
              componentNames={componentNames}
            />
          </div>
        </DragDropContext>
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
