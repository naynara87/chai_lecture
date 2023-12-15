import { css } from "@emotion/react";
import { MODAL_CONTENT_EDITOR_HEIGHT } from "../constants/style";

export const TitleCss = css`
  font-weight: 600;
  font-size: 24px;
`;

export const SubTitleCss = css`
  margin-top: 6px;
  font-weight: 600;
  color: #808080;
`;

export const ContentEditorCss = css`
  max-height: ${MODAL_CONTENT_EDITOR_HEIGHT + 50}px;
  overflow-y: auto;
  width: 100%;
`;
