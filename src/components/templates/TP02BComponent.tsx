import React, { useEffect, useMemo } from "react";
import { TP02B } from "../../types/pageTemplate";
import { TextBoxesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TextBoxes from "../molecules/TextBoxes";
import TitleContent from "../molecules/TitleContent";

interface TP02BComponentProps extends TemplateProps {}

const TP02BComponent = ({ setPageCompleted, page }: TP02BComponentProps) => {
  const thisPage = page as TP02B;

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
        <TextBoxes datas={TextBoxesContentData?.data ?? []} />
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02BComponent;
