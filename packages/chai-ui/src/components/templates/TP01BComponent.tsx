import React, { useEffect, useMemo, useRef, useState } from "react";
import { TP01B } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TitleContent from "../molecules/TitleContent";
import DialogContainer from "../molecules/DialogContainer";
import { css } from "@emotion/react";
import TP01Layout from "../Layouts/TP01Layout";

const dialogContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TP01BComponentProps extends TemplateProps {}

const TP01BComponent = ({
  setPageCompleted,
  page,
  showHeader = true,
}: TP01BComponentProps) => {
  const [currentHeight, setCurrentHeight] = useState(0);
  const [isShowCorrect, setIsShowCorrect] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const thisPage = page as TP01B;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted, currentContentIndex]);

  const DialogContentData = useMemo(() => {
    return thisPage.template.contents.find(
      (content) => content.type === "dialog",
    );
  }, [thisPage.template.contents]);

  const mainContent = useMemo(() => {
    return (
      <DialogContainer
        datas={DialogContentData?.data ?? []}
        currentContentIndex={currentContentIndex}
        setCurrentContentIndex={setCurrentContentIndex}
        currentHeight={currentHeight}
        setCurrentHeight={setCurrentHeight}
        layoutRef={layoutRef}
        customCss={dialogContainerStyles}
        isShowCorrect={isShowCorrect}
        setIsShowCorrect={setIsShowCorrect}
      />
    );
  }, [
    DialogContentData?.data,
    currentHeight,
    isShowCorrect,
    currentContentIndex,
  ]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent
          title={thisPage.title}
          description={thisPage.description}
        />
      ) : (
        <></>
      )}
      <TP01Layout layoutRef={layoutRef}>{mainContent}</TP01Layout>
    </TemplateCommonLayout>
  );
};

export default TP01BComponent;
