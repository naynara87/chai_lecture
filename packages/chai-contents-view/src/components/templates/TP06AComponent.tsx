import React, { useEffect, useMemo } from "react";
import { TP06A } from "../../types/pageTemplate";
import { AudioRecordContent, DialogContent, IconTextContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import AudioRecorder from "../contents/AudioRecorder";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP06Layout from "../Layouts/TP06Layout";
import DialogContainer from "../molecules/DialogContainer";
import IconText from "../molecules/IconText";
import TitleContent from "../molecules/TitleContent";

interface TP06AComponentProps extends TemplateProps {}

const TP06AComponent = ({ setPageCompleted, page, showHeader = true }: TP06AComponentProps) => {
  const currentContentIndex = 0;
  const thisPage = page as TP06A;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const IconTextContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "iconText") as
      | IconTextContent
      | undefined;
  }, [thisPage]);

  const DialogContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "dialog") as
      | DialogContent
      | undefined;
  }, [thisPage]);

  const AudioRecordContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "audioRecord") as
      | AudioRecordContent
      | undefined;
  }, [thisPage]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP06Layout>
        <IconText text={IconTextContentData?.data?.[0].text ?? ""} />
        <DialogContainer
          datas={DialogContentData?.data ?? []}
          currentContentIndex={currentContentIndex}
        />
        <AudioRecorder audioUrl={AudioRecordContentData?.data?.[0].audio.src ?? ""} />
      </TP06Layout>
    </TemplateCommonLayout>
  );
};

export default TP06AComponent;
