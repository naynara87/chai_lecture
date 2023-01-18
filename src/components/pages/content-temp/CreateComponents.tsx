import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";
import "./common.scss";
import ModalLayoutChange from "./ModalLayoutChange";
import ModalComponentChoice from "./ModalComponentChoice";
import useCreateContent from "../../../hooks/contentCreate/useCreateContent";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { Content } from "../../../types/appData";
import useCreateLayoutMapper from "../../../hooks/contentCreate/useCreateLayoutMapper";

const PageLayout = styled.div`
  .btn-wrap {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const CreateComponentsTemp = () => {
  const { contentLayout } = useCreateContent();
  const [isViewing, setIsViewing] = useState(false);
  const navigate = useNavigate();

  const {
    componentList,
    componentNames,
    components,
    addNewComponent,
    setComponentList,
    addComponentToExistingComponentById,
  } = useCreateContent();

  const { getTemplateLayout } = useCreateLayoutMapper({
    componentList,
    componentNames,
    components,
    addNewComponent,
  });

  useEffect(() => {
    console.log("contentLayout", contentLayout);
    if (!isViewing) {
      const copyComponentList = [...componentList];
      Array(contentLayout?.layoutAreaIndex)
        .fill(undefined)
        .map((value, index) => {
          return (copyComponentList[index] = value);
        });
      setComponentList(copyComponentList);
      setIsViewing(true);
    }
  }, [contentLayout, navigate, componentList, isViewing, setComponentList]);

  const handleLayoutClick = () => {
    console.log("레이아웃 설정 버튼 클릭");
    const isConfirmed = window.confirm("레이아웃을 변경하시겠습니까?");
    if (isConfirmed) {
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  };

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (result.destination?.droppableId.slice(-1) === undefined) return;
      if (result.destination.droppableId === result.source.droppableId) return;
      // 컨텐츠를 옮길 위치
      const componentIndex = parseInt(result.destination?.droppableId.slice(-1)!);
      // 컨텐츠를 옮겨온 위치
      const currentIndex = parseInt(result.source.droppableId.slice(-1)!);
      const copyComponentList = [...componentList];
      if (componentList[componentIndex]) {
        if (result.source.droppableId === "btn-wrap") {
          const confirm = window.confirm(
            "기존의 컴포넌트의 내용이 사라집니다. 컴포넌트를 변경하시겠습니까?",
          );
          if (!confirm) {
            return;
          }
        } else {
          const confirm = window.confirm("컴포넌트의 위치를 변경하시겠습니까?");
          if (!confirm) {
            return;
          }
        }
      }
      if (result.source.droppableId === "btn-wrap") {
        addNewComponent(result.draggableId as Content["type"], componentIndex);
      } else {
        copyComponentList.splice(componentIndex, 1, componentList[currentIndex]);
        if (componentList[componentIndex] === undefined) {
          copyComponentList.splice(currentIndex, 1, undefined);
        } else {
          copyComponentList.splice(currentIndex, 1, componentList[componentIndex]);
        }
        setComponentList(copyComponentList);
      }
    },
    [addNewComponent, componentList, setComponentList],
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
        <DragDropContext onDragEnd={handleDragEnd}>
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
                            onClick={() => {
                              const nullIndex = componentList.findIndex(
                                (component) => component === undefined,
                              );
                              if (nullIndex === -1) {
                                alert(
                                  "템플릿의 빈칸이 존재하지않아 컴포넌트를 추가할 수 없습니다.",
                                );
                                return;
                              } else {
                                addNewComponent(componentName, nullIndex);
                              }
                            }}
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
            {getTemplateLayout(contentLayout?.layoutName!)}
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
