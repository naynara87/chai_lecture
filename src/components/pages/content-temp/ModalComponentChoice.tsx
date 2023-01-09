import React, { useEffect } from "react";
import styled from "@emotion/styled";
import "./common.scss";
import "./modal.scss";

// NOTE: 특정 페이지에서만 스타일이 변경될 시 사용
const ModalLayout = styled.div`
  display: none;

  &.active {
    display: block;
  }
`;

const ModalComponentChoice = () => {

  return (
    <ModalLayout>
      <div className="modal-bg"></div>
      <div className="modal-container modal-component-choice">
        <h2 className="modal-ttl">Component<button className="btn">닫기</button></h2>
        <div className="grid-container">
          <button className="btn btn-component-choice">Choose Text</button>
          <button className="btn btn-component-choice">Text Boxes</button>
          <button className="btn btn-component-choice">Dialog</button>
          <button className="btn btn-component-choice">Audio Record</button>
          <button className="btn btn-component-choice">Drag And Drop</button>
          <button className="btn btn-component-choice">Icon Text</button>
          <button className="btn btn-component-choice">Number Table</button>
          <button className="btn btn-component-choice">Word Quiz</button>
          <button className="btn btn-component-choice">Sort Words</button>
          <button className="btn btn-component-choice">Bottom Tabs</button>
          <button className="btn btn-component-choice">Choose Media Text</button>
          <button className="btn btn-component-choice">Study Sentences With Vocabulary</button>
          <button className="btn btn-component-choice">Side Tabs</button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ModalComponentChoice;
