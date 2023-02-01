import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { HtmlContent } from "../../types/templateContents";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import TipComponent from "../molecules/TipComponent";
import ImageContentComponent from "./ImageContentComponent";

interface HtmlContainerProps {
  htmlCss?: SerializedStyles;
}

const HtmlContainer = styled.div<HtmlContainerProps>`
  display: flex;

  ${(props) => props.htmlCss}
`;
interface HtmlContentAdapterProps {
  content: HtmlContent;
  htmlCss?: SerializedStyles;
}
const HtmlContentAdapter = ({ content, htmlCss }: HtmlContentAdapterProps) => {
  const { data } = content;

  return (
    <HtmlContainer htmlCss={htmlCss}>
      {data[0].icon?.src && (
        <ImageContentComponent
          imageAlt={data[0].icon?.src}
          imageSrc={data[0].icon?.src}
          filter="none"
          isZoom={false}
        />
      )}
      {data.map((htmlData, index) => {
        if (htmlData.kind === "tip") {
          return <TipComponent key={index} html={htmlData.text} />;
        }
        return <HtmlContentComponent key={index} html={htmlData.text} />;
      })}
    </HtmlContainer>
  );
};

export default HtmlContentAdapter;
