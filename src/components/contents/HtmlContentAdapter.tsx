import styled from "@emotion/styled";
import React from "react";
import { HtmlContent } from "../../types/templateContents";
import { changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import TipComponent from "../molecules/TipComponent";

const HtmlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  > div > h2 {
    font-weight: 400;
    font-size: ${changePXtoVW(64)};
  }
  
  > div > h3 {
    font-weight: 600;
    font-size: ${changePXtoVW(48)};
  }

  > div > p {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }
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
