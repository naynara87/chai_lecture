import React, { useEffect, useMemo } from "react";
import { TP09B } from "../../types/pageTemplate";
import { DialogContent, IconTextContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP09Layout from "../Layouts/TP09Layout";
import DialogContainer from "../molecules/DialogContainer";
import IconText from "../molecules/IconText";
import TitleContent from "../molecules/TitleContent";

interface TP09BComponentProps extends TemplateProps {}

const TP09BComponent = ({ setPageCompleted, page }: TP09BComponentProps) => {
  const thisPage = page as TP09B;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const iconTextContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "iconText") as
      | IconTextContent
      | undefined;
  }, [thisPage.template.contents]);

  const dialogContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "dialog") as
      | DialogContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP09Layout>
        <IconText text={iconTextContentData?.data?.[0].text ?? ""} />
        <DialogContainer datas={dialogContentData?.data ?? []} />
      </TP09Layout>
    </TemplateCommonLayout>
  );
};

export default TP09BComponent;
