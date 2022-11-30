import styled from "@emotion/styled";
import React from "react";
import { HtmlContent } from "../../types/templateContents";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import TipComponent from "../molecules/TipComponent";

const HtmlWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
interface HtmlContentAdapterProps {
  content: HtmlContent;
}
const HtmlContentAdapter = ({ content }: HtmlContentAdapterProps) => {
  const { data } = content;

  return (
    <HtmlWrapper>
      {data.map((htmlData, index) => {
        if (htmlData.kind === "tip") {
          return <TipComponent key={index} html={htmlData.text} />;
        }
        return <HtmlContentComponent key={index} html={htmlData.text} />;
      })}
    </HtmlWrapper>
  );
};

export default HtmlContentAdapter;
