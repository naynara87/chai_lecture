import styled from "@emotion/styled";
import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ID } from "../../types/appData";
import { TP15A } from "../../types/pageTemplate";
import { HtmlContent, ImagesContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import { getPageUrl } from "../../utils/url";
import HtmlContentComponent from "../contents/HtmlContentComponent";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP15Layout from "../Layouts/TP15Layout";
import ImagesContentComponent from "../contents/ImagesContentComponent";
import TabButtons from "../molecules/TabButtons";
import TipComponent from "../molecules/TipComponent";
import TitleContent from "../molecules/TitleContent";

const HtmlContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3.3vw;
`;

interface TP15AComponentProps extends TemplateProps {}

const TP15AComponent = ({ setPageCompleted, page }: TP15AComponentProps) => {
  const thisPage = page as TP15A;
  const navigate = useNavigate();
  const { cornerId } = useParams();

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const handleClickTab = (pageId?: ID) => {
    if (cornerId && pageId) {
      navigate(getPageUrl(cornerId, pageId));
    }
  };

  const imagesContent = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "images");
  }, [thisPage]);

  const htmlContent = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "html") as
      | HtmlContent
      | undefined;
  }, [thisPage]);

  const htmlTipString = useMemo(() => {
    const htmlTipData = htmlContent?.data.find((content) => content.kind === "tip");
    return htmlTipData?.text;
  }, [htmlContent]);

  const htmlDescriptionString = useMemo(() => {
    const htmlDescriptionData = htmlContent?.data.find((content) => content.kind !== "tip");
    return htmlDescriptionData?.text;
  }, [htmlContent]);

  return (
    <TemplateCommonLayout>
      <TitleContent title={page.title} description={page.description} />
      <TP15Layout>
        <TabButtons tabs={thisPage.tabs ?? []} handleClickTab={handleClickTab} />
        <ImagesContentComponent imagesContent={imagesContent as ImagesContent} />
        <HtmlContainer>
          {htmlDescriptionString && <HtmlContentComponent html={htmlDescriptionString} />}
          {htmlTipString && <TipComponent html={htmlTipString} />}
        </HtmlContainer>
      </TP15Layout>
    </TemplateCommonLayout>
  );
};

export default TP15AComponent;
