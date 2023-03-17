import styled from "@emotion/styled";
import React from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AddButton from "../atoms/AddButton";
import TogglesWrapper from "../atoms/TogglesWrapper";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { colorPalette } from "chai-ui-v2";

const ToggleSentenceWrapper = styled.div``;

const SentenceWrap = styled.div`
  position: relative;
  width: 500px;
  margin-top: 10px;
  padding: 16px;
  border: 1px solid ${colorPalette.subpurple};
  border-radius: 10px;
  background-color: ${colorPalette.sublightpurple};

  .btn-delete {
    z-index: 1;
    position: absolute;
    top: 10px;
    left: auto;
    right: 10px;
  }

  .text-lg {
    font-weight: 600;
    font-size: 22px;
    word-break: break-all;
  }

  .text {
    margin-top: 15px;
    font-size: 14px;
  }
`;

const ToggleSentenceListCreate = () => {
  return (
    <ContentCreatorLayout onDeleteComponent={() => {}}>
      <ToggleSentenceWrapper className="toggle-sentence-wrapper">
        <TogglesWrapper />
        {/* TODO: 누르면 sentencewrap이 추가됨 */}
        <AddButton>문장 추가</AddButton>
        <SentenceWrap className="sentence-wrap">
          <ObjectDeleteButton />
          <p className="text-lg">한문을 입력해주세요</p>
          <p className="text">한어병음을 입력해주세요</p>
          <p className="text">뜻을 입력해주세요</p>
        </SentenceWrap>
      </ToggleSentenceWrapper>
    </ContentCreatorLayout>
  );
};

export default ToggleSentenceListCreate;
