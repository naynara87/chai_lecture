import { css } from "@emotion/react";
// import { footerHeightNormal, headerHeightNormal } from "../constants/layout";
import { changePXtoVH } from "../utils/styles";

export const footerHeight = css`
  height: ${changePXtoVH(112)};
`;

export const headerHeight = css`
  height: ${changePXtoVH(104)};
`;
