import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { TP11E } from "../../types/pageTemplate";
import { ChooseTextContent, IconTextContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVH } from "../../utils/styles";
import ChooseText from "../contents/ChooseText";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP11Layout from "../Layouts/TP11Layout";
import IconText from "../molecules/IconText";
import TitleContent from "../molecules/TitleContent";

const iconTextCss = css`
  margin-bottom: ${changePXtoVH(72)};
`;

interface TP11EComponentProps extends TemplateProps {}

const TP11EComponent = ({ setPageCompleted, page, showHeader = true }: TP11EComponentProps) => {
  const thisPage = page as TP11E;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const iconTextContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "iconText") as
      | IconTextContent
      | undefined;
  }, [thisPage.template.contents]);

  const chooseTextContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "chooseText") as
      | ChooseTextContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP11Layout>
        <IconText text={iconTextContentData?.data?.[0].text ?? ""} customCss={iconTextCss} />
        {chooseTextContentData ? (
          <ChooseText contentData={chooseTextContentData} isVertical={true} />
        ) : (
          <></>
        )}
      </TP11Layout>
    </TemplateCommonLayout>
  );
};

export default TP11EComponent;
