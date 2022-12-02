import React, { useEffect, useMemo, useRef, useState } from "react";
import { TP01B } from "../../types/pageTemplate";
import { DialogContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";
import DialogContainer from "../molecules/DialogContainer";
import { css } from "@emotion/react";

const dialogContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TP01BComponentProps extends TemplateProps {}

const TP01BComponent = ({ setPageCompleted, page, showHeader = true }: TP01BComponentProps) => {
  // const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [isShowCorrect, setIsShowCorrect] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);
  const currentContentIndex = useRef(0);

  const thisPage = page as TP01B;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const DialogContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "dialog") as
      | DialogContent
      | undefined;
  }, [thisPage.template.contents]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP02Layout layoutRef={layoutRef}>
        <DialogContainer
          datas={DialogContentData?.data ?? []}
          currentContentIndex={currentContentIndex}
          currentHeight={currentHeight}
          setCurrentHeight={setCurrentHeight}
          layoutRef={layoutRef}
          customCss={dialogContainerStyles}
          isShowCorrect={isShowCorrect}
          setIsShowCorrect={setIsShowCorrect}
        />
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP01BComponent;
