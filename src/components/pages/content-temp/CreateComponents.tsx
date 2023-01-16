import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import useCreateContent from "../../../hooks/contentCreate/useCreateContent";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTENT_LAYOUT_URL } from "../../../constants/url";
import "./common.scss";
import ModalLayoutChange from "./ModalLayoutChange";
import ModalComponentChoice from "./ModalComponentChoice";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import CreateDropzone from "./CreateDropzone";
import CreateContentList from "./CreateContentList";
import uuid from "react-uuid";
import { ApproveContent } from "../../../types/appData";
import useCreateContents from "../../../hooks/useCreateContents";

export interface content {
  id: string;
  type: string;
  isSubmit?: boolean;
  contents?: ApproveContent;
  inputText?: React.MutableRefObject<string>;
}

interface HandleChangeAreaProps {
  result: DropResult;
  currentAreaName: string;
  changeAreaName: string;
  currentArea: content[];
  changeArea: content[];
  setCurrentArea: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        type: string;
      }[]
    >
  >;
  setChangeArea: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        type: string;
      }[]
    >
  >;
}

const PageLayout = styled.div`
  .btn-wrap {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const contentList = [
  { id: "1", type: "글자" },
  { id: "2", type: "사진" },
  { id: "3", type: "음원" },
  { id: "4", type: "영상" },
  { id: "5", type: "컴포넌트" },
];

const CreateComponents = () => {
  const { contentLayout } = useCreateContent();
  const { pageData, addContent } = useCreateContents("TP01A");
  const [isDrag, setIsDrag] = useState(false);
  const [pageContents1, setPageContents1] = useState<content[]>([]);
  const [pageContents2, setPageContents2] = useState<content[]>([]);
  const navigate = useNavigate();

  console.log(pageData);

  const handleSubmitContent = useCallback(
    (dropzoneName: string, contentId: string, inputText: React.MutableRefObject<string>) => {
      if (dropzoneName === "pageContent1") {
        const submitContentIndex = pageContents1.findIndex((content) => {
          return content.id === contentId;
        });
        const copyArr = [...pageContents1];
        copyArr[submitContentIndex].isSubmit = true;
        copyArr[submitContentIndex].inputText = inputText;
        setPageContents1(copyArr);
      } else if (dropzoneName === "pageContent2") {
        const submitContentIndex = pageContents2.findIndex((content) => {
          return content.id === contentId;
        });
        const copyArr = [...pageContents2];
        copyArr[submitContentIndex].isSubmit = true;
        copyArr[submitContentIndex].inputText = inputText;
        addContent(copyArr[submitContentIndex].type, inputText);

        setPageContents2(copyArr);
      }
    },
    [pageContents1, pageContents2, addContent],
  );

  const handleLayoutClick = () => {
    console.log("레이아웃 설정 버튼 클릭");
    const isConfirmed = window.confirm("레이아웃을 변경하시겠습니까?");
    if (isConfirmed) {
      navigate(CREATE_CONTENT_LAYOUT_URL);
    }
  };

  const handleDragStart = useCallback((event: any) => {
    console.log(event);
    setIsDrag(true);
  }, []);

  const handleChangeArea = useCallback(
    ({
      result,
      currentAreaName,
      currentArea,
      changeAreaName,
      changeArea,
      setCurrentArea,
      setChangeArea,
    }: HandleChangeAreaProps) => {
      if (!result.destination) return;
      if (result.source.droppableId === currentAreaName) {
        const pageContentArr = [...currentArea];
        const [reorderedItem] = pageContentArr.splice(result.source.index, 1);
        pageContentArr.splice(result.destination.index, 0, reorderedItem);
        setCurrentArea(pageContentArr);
        return;
      } else if (result.source.droppableId === changeAreaName) {
        const pageContentArr1 = [...currentArea];
        const pageContentArr2 = [...changeArea];
        const [reorderedItem] = pageContentArr2.splice(result.source.index, 1);
        pageContentArr1.splice(result.destination.index, 0, reorderedItem);
        pageContentArr2.splice(result.source.index, 0);
        setCurrentArea(pageContentArr1);
        setChangeArea(pageContentArr2);
        return;
      }
      const currentPageArea = [...currentArea];
      currentPageArea.splice(result.destination.index, 0, {
        id: uuid(),
        type: contentList[result.source.index].type,
      });
      setCurrentArea(currentPageArea);
    },
    [],
  );

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;
      if (result.destination.droppableId === "pageContent1") {
        handleChangeArea({
          result,
          currentAreaName: "pageContent1",
          currentArea: pageContents1,
          changeAreaName: "pageContent2",
          changeArea: pageContents2,
          setCurrentArea: setPageContents1,
          setChangeArea: setPageContents2,
        });
      }
      if (result.destination.droppableId === "pageContent2") {
        handleChangeArea({
          result,
          currentAreaName: "pageContent2",
          currentArea: pageContents2,
          changeAreaName: "pageContent1",
          changeArea: pageContents1,
          setCurrentArea: setPageContents2,
          setChangeArea: setPageContents1,
        });
      }
      setIsDrag(false);
    },
    [pageContents1, pageContents2, handleChangeArea],
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
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <div className="flex-btw-wrap">
            <div className="btn-wrap">
              <button className="btn btn-border-primary" onClick={handleLayoutClick}>
                레이아웃 설정
              </button>

              <ModalLayoutChange />
            </div>

            <CreateContentList contentList={contentList} />
          </div>
          <div className="page-wrap">
            <CreateDropzone
              dropzoneName="pageContent1"
              contentList={pageContents1}
              handleSubmitContent={handleSubmitContent}
            />
            <CreateDropzone
              dropzoneName="pageContent2"
              contentList={pageContents2}
              handleSubmitContent={handleSubmitContent}
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

export default CreateComponents;
