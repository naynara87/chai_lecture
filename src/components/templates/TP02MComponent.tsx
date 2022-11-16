import { css } from "@emotion/react";
import React, { useEffect, useMemo } from "react";
import { TP02M } from "../../types/pageTemplate";
import { TextBoxesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TextBoxes from "../molecules/TextBoxes";
import TitleContent from "../molecules/TitleContent";

const customBoxCss = css`
  width: 300px;
`;

interface TP02MComponentProps extends TemplateProps {}

const TP02MComponent = ({ setPageCompleted, page }: TP02MComponentProps) => {
  const thisPage = page as TP02M;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const TextBoxesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "textBoxes") as
      | TextBoxesContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP02Layout>
        <TextBoxes
          datas={TextBoxesContentData?.data ?? []}
          isHorizontal={true}
          customBoxCss={customBoxCss}
        />
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02MComponent;
