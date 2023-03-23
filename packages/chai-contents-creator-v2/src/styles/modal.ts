import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";
import { MODAL_CONTENT_EDITOR_HEIGHT } from "../constants/style";

export const ModalInner = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 420px;
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  background-color: ${colorPalette.white};
  transform: translate(-50%, -50%);
`;

export const ModalIntroductionContainer = styled.div`
  .flex-start-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .url-wrapper {
    width: 70%;
  }

  .btns-wrap {
    gap: 8px;
    margin-top: 15px;

    .btn {
      min-width: 1px;
      width: 100%;
      height: 48px;
      font-size: 16px;
    }
  }
`;

export const ImageThumb = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TitleWrap = styled.div`
  padding: 0 16px;
  text-align: left;

  .title {
    font-weight: 600;
    font-size: 24px;
  }

  .sub-title {
    margin-top: 6px;
    font-weight: 600;
    color: ${colorPalette.gray700};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 220px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: ${colorPalette.gray200};
  font-size: 12px;
`;

export const TitleCss = css`
  font-weight: 600;
  font-size: 24px;
`;

export const SubTitleCss = css`
  margin-top: 6px;
  font-weight: 600;
  color: #808080;
`;

export const TextEditorViewerWrapper = styled.div``;

export const ContentEditorCss = css`
  max-height: ${MODAL_CONTENT_EDITOR_HEIGHT + 50}px;
  overflow-y: auto;
`;
