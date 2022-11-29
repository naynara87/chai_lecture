import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { breakPoints } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import { TP11F } from "../../types/pageTemplate";
import { ChooseTextContent, IconTextContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import QuestionIcon from "../atoms/QuestionIcon";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP11Layout from "../Layouts/TP11Layout";
import ChooseText from "../contents/ChooseText";
import TitleContent from "../molecules/TitleContent";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { changePXtoVW } from "../../utils/styles";

const htmlCss = css`
  margin-left: 16px;
  font-size: 24px;
  @media all and (max-width: ${breakPoints.tablet}) {
    font-size: 2vw;
  }
  line-height: 40px;
`;

const QuestionContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  color: ${colorPalette.questionTitle};
  font-weight: 400;
  font-size: ${changePXtoVW(26)};
`;

interface TP11FComponentProps extends TemplateProps {}
const TP11FComponent = ({ page, setPageCompleted, showHeader = true }: TP11FComponentProps) => {
  const thisPage = page as TP11F;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);
  const iconTextContent = useMemo(
    () =>
      thisPage.template.contents.find((content) => content.type === "iconText") as
        | IconTextContent
        | undefined,
    [thisPage],
  );

  const chooseTextContent = useMemo(
    () =>
      thisPage.template.contents.find((content) => content.type === "chooseText") as
        | ChooseTextContent
        | undefined,
    [thisPage],
  );

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP11Layout>
        <QuestionContainer>
          <QuestionIcon />
          <HtmlContentComponent html={iconTextContent?.data?.[0]?.text ?? ""} customCss={htmlCss} />
        </QuestionContainer>
        {chooseTextContent ? <ChooseText contentData={chooseTextContent} /> : <></>}
      </TP11Layout>
    </TemplateCommonLayout>
  );
};

export default TP11FComponent;
