import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { TP05C } from "../../types/pageTemplate";
import { AudioRecordContent, TextBoxesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { changePXtoVH } from "../../utils/styles";
import AudioRecorder from "../contents/AudioRecorder";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP05Layout from "../Layouts/TP05Layout";
import TextBoxes from "../molecules/TextBoxes";
import TitleContent from "../molecules/TitleContent";

const customBoxContainerCss = css`
  margin-bottom: ${changePXtoVH(20)};
`;

interface TP05CComponentProps extends TemplateProps {}

const TP05CComponent = ({ setPageCompleted, page }: TP05CComponentProps) => {
  const thisPage = page as TP05C;

  const TextBoxesContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "textBoxes") as
      | TextBoxesContent
      | undefined;
  }, [thisPage.template.contents]);

  const AudioRecordContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "audioRecord") as
      | AudioRecordContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP05Layout>
        <TextBoxes
          datas={TextBoxesContentData?.data ?? []}
          customBoxContainerCss={customBoxContainerCss}
        />
        <AudioRecorder audioUrl={AudioRecordContentData?.data[0].audio.src ?? ""} />
      </TP05Layout>
    </TemplateCommonLayout>
  );
};

export default TP05CComponent;
