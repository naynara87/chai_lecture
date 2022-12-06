import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { footerHeightNormal } from "../../constants/layout";
import { TP08A } from "../../types/pageTemplate";
import { HtmlContent, ImagesContent, SentenceWordContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import ImageContentComponent from "../contents/ImageContentComponent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP08Layout from "../Layouts/TP08Layout";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import SentenceBubbleComponent from "../molecules/SentenceBubble";
import TitleContent from "../molecules/TitleContent";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HtmlContainer = styled.div`
  margin-left: ${changePXtoVW(20)};
  text-align: left;
  width: ${changePXtoVW(500)};
`;

const htmlCss = css`
  margin-bottom: ${changePXtoVH(10)};

  > h1 {
    font-size: ${changePXtoVW(64)};
  }

  > p {
    margin-top: ${changePXtoVH(24)};
    font-weight: 500;
    font-size: ${changePXtoVW(48)};
  }
`;

const imageCss = css`
  width: ${changePXtoVW(524)};
`;

const sentenceContainerCss = css`
  position: absolute;
  left: 25%;
  bottom: calc(${footerHeightNormal} + ${changePXtoVH(20)});
  margin-bottom: ${changePXtoVH(5)};
`;

interface TP08AComponentProps extends TemplateProps {}

const TP08AComponent = ({ setPageCompleted, page }: TP08AComponentProps) => {
  const thisPage = page as TP08A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const htmlContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage.template.contents]);

  const imageContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "images") as
      | ImagesContent
      | undefined;
  }, [thisPage.template.contents]);

  const SentenceContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "sentenceWord") as
      | SentenceWordContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP08Layout>
        <MainContainer>
          <ImageContentComponent
            imageSrc={imageContentData?.data?.[0].src ?? ""}
            imageAlt={thisPage.title}
            filter="none"
            customCss={imageCss}
          />
          <HtmlContainer>
            {htmlContentData?.data.map((content, index) => {
              return <HtmlContentComponent html={content.text} key={index} customCss={htmlCss} />;
            }) ?? <></>}
          </HtmlContainer>
        </MainContainer>

        <SentenceBubbleComponent
          sentences={SentenceContentData?.data ?? []}
          containerCss={sentenceContainerCss}
        />
      </TP08Layout>
    </TemplateCommonLayout>
  );
};

export default TP08AComponent;
