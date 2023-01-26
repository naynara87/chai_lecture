import React, { useEffect, useMemo } from "react";
import { TP05F } from "../../types/pageTemplate";
import { AudioRecordContent, DialogContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import AudioRecorder from "../contents/AudioRecorder";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP05Layout from "../Layouts/TP05Layout";
import DialogContainer from "../molecules/DialogContainer";
import TitleContent from "../molecules/TitleContent";

interface TP05FComponentProps extends TemplateProps {}

const TP05FComponent = ({ setPageCompleted, page }: TP05FComponentProps) => {
  const thisPage = page as TP05F;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const DialogContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "dialog") as
      | DialogContent
      | undefined;
  }, [thisPage.template.contents]);

  const AudioContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "dialog") as
      | AudioRecordContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP05Layout>
        <DialogContainer datas={DialogContentData?.data ?? []} />
        <AudioRecorder audioUrl={AudioContentData?.data?.[0].audio?.src ?? ""} />
      </TP05Layout>
    </TemplateCommonLayout>
  );
};

export default TP05FComponent;
