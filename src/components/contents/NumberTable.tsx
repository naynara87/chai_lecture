import { css } from "@emotion/react";
import React from "react";
import { changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "./HtmlContentComponent";

interface NumberTableProps {
  text: string;
  pronunciation: string;
  meaning: string;
}

const htmlCustomCss = css`
  font-size: ${changePXtoVW(48)};
  font-weight: 500;
`;

const NumberTable = ({ text, pronunciation, meaning }: NumberTableProps) => {
  return (
    <>
      <HtmlContentComponent html={text} customCss={htmlCustomCss} />
      <HtmlContentComponent html={pronunciation} customCss={htmlCustomCss} />
      <HtmlContentComponent html={meaning} customCss={htmlCustomCss} />
    </>
  );
};

export default NumberTable;
